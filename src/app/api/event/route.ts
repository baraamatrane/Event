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
