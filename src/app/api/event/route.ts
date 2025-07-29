import { NextRequest, NextResponse } from "next/server";
import Event from "../../../../lib/models/Event";
import connectDB from "../../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    // Only allow the user from the token to create events for themselves
    const { title, description, image, date, place, host, category } =
      await req.json();

    // Basic input validation
    if (
      !title ||
      !description ||
      !image ||
      !date ||
      !place ||
      !host ||
      !category
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const NewEvent = new Event({
      title,
      description,
      image,
      date,
      place,
      category,
      host,
    });
    const Createdevent = await NewEvent.save();
    return NextResponse.json({ Createdevent }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

async function GET(req: NextRequest) {
  try {
    await connectDB();

    const page = req.nextUrl.searchParams.get("page") || 1;
    const limit = req.nextUrl.searchParams.get("limit") || 5;
    const search = req.nextUrl.searchParams.get("search_query");
    const category = req.nextUrl.searchParams.get("category");
    const location = req.nextUrl.searchParams.get("location");
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
