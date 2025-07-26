import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../lib/models/User";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email && !password) {
      return NextResponse.json(
        { error: "Email and Password are required" },
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
    const encryptedPassword = bcrypt.compare(
      password,
      FoundUser.password,
      (err, result) => {
        if (err) {
          return NextResponse.json(
            { error: "password incorrect" },
            { status: 400 }
          );
        }
        if (result) {
          return new NextResponse(FoundUser, { status: 200 });
        }
      }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to Login" }, { status: 500 });
  }
}
