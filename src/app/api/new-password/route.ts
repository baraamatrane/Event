import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import bcrypt from "bcryptjs";
import User from "../../../../lib/models/User";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    await connectDB();
    const { password, token } = await request.json();
    if (!password) {
      return NextResponse.json(
        { message: "Password is required" },
        { status: 400 }
      );
    }
    if (!token) {
      return NextResponse.json(
        { message: "Token is required" },
        { status: 400 }
      );
    }
    const email: any = jwt.decode(token);
    if (!email) {
      return NextResponse.json({ message: "Invalid token" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const UpdatedUser = await User.findOneAndUpdate(
      { email: email.email },
      { password: hashedPassword },
      { new: true }
    );
    if (!UpdatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ UpdatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
