import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { isPremium, destinations, activities, nights, contact, payment, totalCostCAD } = body;

    // Log the custom trip transmission payload to console for full traceability
    console.log("=========================================");
    console.log("SECURE PGP TRANSMISSION INCOMING");
    console.log("TYPE:", isPremium ? "PREMIUM SOVEREIGN PASSAGE" : "STANDARD EXCLUSIVE PASSAGE");
    console.log("CLIENT:", contact.fullName);
    console.log("EMAIL:", contact.email);
    console.log("PHONE:", contact.phone);
    console.log("DURATION:", nights, "Nights");
    console.log("TOTAL COST:", totalCostCAD, "CAD");
    console.log("DESTINATIONS SELECTED:", destinations.join(", "));
    console.log("ACTIVITIES SELECTED:", activities.join(", "));
    if (payment) {
      console.log("SECURE DEPOSIT CARD:", payment.cardNumber, "EXPIRY:", payment.expiry);
    } else {
      console.log("SECURE DEPOSIT CARD: NONE PROVIDED");
    }
    console.log("=========================================");

    // Simulate network delay for realistic user interface response
    await new Promise(resolve => setTimeout(resolve, 800));

    // Here, developers can plug in Nodemailer, Resend, or SendGrid integration.
    // e.g.:
    // await sendMail({
    //   to: process.env.OWNER_EMAIL,
    //   subject: `Exclusive Inquiry from ${contact.fullName}`,
    //   text: `...`
    // });

    return NextResponse.json({ success: true, message: "Transmission accepted." }, { status: 200 });
  } catch (error) {
    console.error("Transmission error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
