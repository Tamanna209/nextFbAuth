import { adminAuth } from "@/lib/firebase/admin";

export async function verifyFirebaseToken(token: string) {
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return decodedToken; // uid, phone_number, email, etc
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
