import { NextRequest, NextResponse } from "next/server";
import User from "@/../lib/models/User";

export async function GET(request: NextRequest) {
  // Simulate fetching user data
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, password, Type } = data;
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }
    const newUser = new User({ name, email, password, Type });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
