import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../lib/models/User";
import connectDB from "../../../../lib/db";
import jwt from "jsonwebtoken";
import z from "zod";

const SignupSchema = z.object({
  email: z.string().email().max(50),
  password: z.string().min(6).max(40),
});

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    const parsed = SignupSchema.safeParse({ name, email, password });
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Email and Password are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    const newUser = new User({
      Fullname: name,
      email,
      password: hashedPassword,
    });
    const createdUser = await newUser.save();
    if (!createdUser) {
      return NextResponse.json({ error: "Can not Sign up" }, { status: 400 });
    }
    const response = NextResponse.json(createdUser, { status: 201 });

    return response;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
