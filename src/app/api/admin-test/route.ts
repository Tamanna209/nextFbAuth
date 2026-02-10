import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/admin";

export async function GET() {
  const users = await adminAuth.listUsers(1);

  return NextResponse.json({
    success: true,
    usersCount: users.users.length,
  });
}
