import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import z from "zod";
export async function GET(req: Request) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const token = searchParams.get("token");
    const checktoken = jwt.verify(token!, process.env.JWT_SECRET!);
    if (!checktoken) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    return NextResponse.json({ isValid: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
