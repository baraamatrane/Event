import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/db";
import Event from "../../../../../lib/models/Event";

export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = context.params; // <-- Correct way to get id

  // Validate the ID format mongoose id
  if (!isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }
  try {
    // Connect to the database
    await connectDB();

    // Fetch the event by ID
    const event = await Event.findById(id);
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ event }, { status: 200 });
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
