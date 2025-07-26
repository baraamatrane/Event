import { NextRequest, NextResponse } from "next/server";
import User from "../../../../lib/models/User";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { email, password, firstName, lastName, address } = data;
    if (!email || !password || !firstName || !lastName || !address) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }
    const newUser = new User(data);
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
