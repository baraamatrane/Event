import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();
  if (
    !pathname.includes("/users/") ||
    !id ||
    !mongoose.Types.ObjectId.isValid(id)
  ) {
    return new Response("Invalid path", { status: 400 });
  }
  const Finduser = await mongoose.models.User.findById(id);
  if (!Finduser) {
    return new Response("User not found", { status: 404 });
  }
  return NextResponse.json(Finduser, { status: 200 });
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { email, firstName, lastName, address } = data;
    if (!email || !firstName || !lastName || !address) {
      return NextResponse.json(
        { error: "Name, email, and address are required" },
        { status: 400 }
      );
    }
  } catch {}
}
