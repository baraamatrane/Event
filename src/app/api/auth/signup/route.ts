import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../lib/models/User";
import connectDB from "../../../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and Password are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    const createdUser = await newUser.save();
    if (!createdUser) {
      return NextResponse.json({ error: "Can not Sign up" }, { status: 400 });
    }
    console.log("sucssus");
    return NextResponse.json(createdUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
