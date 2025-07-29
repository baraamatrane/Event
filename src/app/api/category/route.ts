import { NextRequest, NextResponse } from "next/server";
import Category from "../../../../lib/models/Category";
import connectDB from "../../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name } = await req.json();
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    const category = await Category.create({ name });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const GetCategory = await Category.find();
    return NextResponse.json({ Category: GetCategory }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
