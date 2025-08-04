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
    const { email, password } = await req.json();

    const parsed = SignupSchema.safeParse({ email, password });
    if (!parsed.success) {
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
    const createdUser = await newUser.save();
    if (!createdUser) {
      return NextResponse.json({ error: "Can not Sign up" }, { status: 400 });
    }
    const token = jwt.sign(
      { id: createdUser._id, email: createdUser.email },
      process.env.JWT_SECRET!,
      { expiresIn: "24h" }
    );
    const response = NextResponse.json(createdUser, { status: 201 });
    response.cookies.set({
      name: "user",
      value: token,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
