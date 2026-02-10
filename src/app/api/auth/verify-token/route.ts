import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    if (!phone.startsWith("+")) {
      return NextResponse.json(
        { error: "Phone number must be in E.164 format (+91...)" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Phone number accepted. Proceed with OTP verification.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
