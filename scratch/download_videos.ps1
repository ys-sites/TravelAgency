$ErrorActionPreference = "Stop"

$assets11 = @(
  "Golf_in_Morocco_New_tmjx9s",
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

# Add 11 standard assets
foreach ($asset in $assets11) {
  $downloads.Add([PSCustomObject]@{
    Path = "videos/$asset/poster.jpg"
    Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,f_auto,w_1920/$asset.jpg"
  })
  $downloads.Add([PSCustomObject]@{
    Path = "videos/$asset/desktop.mp4"
    Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto:best,fl_progressive,w_1920,du_60/$asset.mp4"
  })
  $downloads.Add([PSCustomObject]@{
    Path = "videos/$asset/mobile.mp4"
    Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,fl_progressive,w_960,du_60/$asset.mp4"
  })
  $downloads.Add([PSCustomObject]@{
    Path = "videos/$asset/desktop.webm"
    Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto:best,fl_progressive,w_1920,du_60,vc_vp9/$asset.webm"
  })
  $downloads.Add([PSCustomObject]@{
    Path = "videos/$asset/mobile.webm"
    Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,fl_progressive,w_960,du_60,vc_vp9/$asset.webm"
  })
}

# Add Golf_in_Morocco_ssfati
$downloads.Add([PSCustomObject]@{
  Path = "videos/Golf_in_Morocco_ssfati/poster.jpg"
  Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,f_auto,w_1920/Golf_in_Morocco_ssfati.jpg"
})
$downloads.Add([PSCustomObject]@{
  Path = "videos/Golf_in_Morocco_ssfati/desktop.mp4"
  Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto:best,fl_progressive,w_1920,du_140/Golf_in_Morocco_ssfati.mp4"
})
$downloads.Add([PSCustomObject]@{
  Path = "videos/Golf_in_Morocco_ssfati/mobile.mp4"
  Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/c_fill,ar_9:16,w_640,q_auto,du_140/Golf_in_Morocco_ssfati.mp4"
})
$downloads.Add([PSCustomObject]@{
  Path = "videos/Golf_in_Morocco_ssfati/desktop.webm"
  Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto:best,fl_progressive,w_1920,vc_vp9,du_140/Golf_in_Morocco_ssfati.webm"
})
$downloads.Add([PSCustomObject]@{
  Path = "videos/Golf_in_Morocco_ssfati/mobile.webm"
  Url  = "https://res.cloudinary.com/dzgmvz6tc/video/upload/c_fill,ar_9:16,w_640,q_auto,du_140,vc_vp9/Golf_in_Morocco_ssfati.webm"
})

Write-Host "Total items to download: $($downloads.Count)"

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
    Write-Host "[$count/60] (Attempt $retry) Downloading to $dest..."
    try {
      # Try curl.exe if available, otherwise fallback to Invoke-WebRequest
      if (Get-Command "curl.exe" -ErrorAction SilentlyContinue) {
        & curl.exe -s -S -fL --retry 2 -o $dest $url
      } else {
        Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
      }
      
      # Verify downloaded file exists and is larger than 0 bytes
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

$summary | Out-File -FilePath "download_summary.txt" -Encoding utf8
Write-Host "Summary saved to download_summary.txt"
if ($allValid) {
  Write-Host "SUCCESS: All 60 files verified, exist, and are larger than 0 bytes!"
} else {
  Write-Error "FAILURE: Some files are missing or 0 bytes! Check summary."
}
