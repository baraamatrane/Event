import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../lib/models/User";
import jwt from "jsonwebtoken";
import z from "zod";

const LoginSchema = z.object({
  email: z.string().email().max(50),
  password: z.string().min(6).max(40),
});

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const parsed = LoginSchema.safeParse({ email, password });
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }
    const FoundUser = await User.findOne({ email });
    if (!FoundUser) {
      return NextResponse.json(
        { error: "user did not exist" },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(password, FoundUser.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "password incorrect" },
        { status: 400 }
      );
    }
    const token = jwt.sign(
      { id: FoundUser._id, email: FoundUser.email },
      process.env.JWT_SECRET!,
      { expiresIn: "24h" }
    );
    const response = NextResponse.json(FoundUser, { status: 200 });
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
    return NextResponse.json({ error: "Failed to Login" }, { status: 500 });
  }
}
