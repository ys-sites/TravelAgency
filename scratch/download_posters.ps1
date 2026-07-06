$ErrorActionPreference = "Stop"

$assets = @(
  "Golf_in_Morocco_New_tmjx9s",
  "Golf_in_Morocco_ssfati",
  "Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv",
  "Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad",
  "Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw",
  "Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u",
  "Morocco_Chefchaouen_Hero_16x9_Final.mov_eushqt",
  "Morocco_Tangier_Hero_16x9_UpdatedLogo_f9kwsc",
  "Morocco_Casablanca_Hero_16x9_UpdatedLogo_htz5pb",
  "Morocco_Dakhla_Hero_16x9_UpdatedLogo_cijwv8",
  "Morocco_Ouarzazate_Hero_16x9_UpdatedLogo_jhmnuj",
  "Morocco_Essaouira_Hero_16x9_UpdatedLogo_k4v9gz"
)

$downloads = [System.Collections.Generic.List[PSCustomObject]]::new()

foreach ($asset in $assets) {
  $downloads.Add([PSCustomObject]@{
    Path = "posters/$asset.jpg"
    Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,f_auto,w_1920/$asset.jpg"
  })
}

Write-Host "Total posters to download: $($downloads.Count)"

$count = 0
foreach ($item in $downloads) {
  $count++
  $dest = $item.Path
  $url = $item.Url
  
  $parent = Split-Path -Path $dest -Parent
  if (!(Test-Path -Path $parent)) {
    New-Item -ItemType Directory -Force -Path $parent | Out-Null
  }
  
  $success = $false
  for ($retry = 1; $retry -le 3; $retry++) {
    Write-Host "[$count/12] (Attempt $retry) Downloading to $dest..."
    try {
      if (Get-Command "curl.exe" -ErrorAction SilentlyContinue) {
        & curl.exe -s -S -fL --retry 2 -o $dest $url
      } else {
        Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
      }
      
      if (Test-Path -Path $dest) {
        $file = Get-Item -Path $dest
        if ($file.Length -gt 0) {
          $success = $true
          break
        }
      }
    } catch {
      Write-Warning "Attempt $retry failed for $dest : $_"
    }
    Start-Sleep -Seconds 1
  }
  
  if (!$success) {
    Write-Error "CRITICAL: Failed to download $dest after 3 retries!"
  }
}

Write-Host "`n=== Verification & Summary ==="
$allValid = $true
$summary = [System.Collections.Generic.List[string]]::new()
foreach ($item in $downloads) {
  $dest = $item.Path
  if (Test-Path -Path $dest) {
    $file = Get-Item -Path $dest
    $size = $file.Length
    if ($size -gt 0) {
      $summary.Add("$dest - $($size) bytes")
    } else {
      $summary.Add("ERROR: $dest is 0 bytes")
      $allValid = $false
    }
  } else {
    $summary.Add("ERROR: $dest does not exist")
    $allValid = $false
  }
}

$summary | Out-File -FilePath "posters_summary.txt" -Encoding utf8
Write-Host "Summary saved to posters_summary.txt"
if ($allValid) {
  Write-Host "SUCCESS: All 12 poster files verified, exist, and are larger than 0 bytes!"
} else {
  Write-Error "FAILURE: Some files are missing or 0 bytes! Check summary."
}
