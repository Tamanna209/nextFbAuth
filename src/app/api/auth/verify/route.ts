import { NextRequest, NextResponse } from "next/server";
import { verifyFirebaseToken } from "@/lib/auth/verifyToken";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { success: false, message: "Missing token" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = await verifyFirebaseToken(token);

    return NextResponse.json({
      success: true,
      user: {
        uid: user.uid,
        phone: user.phone_number,
        email: user.email,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }
}
