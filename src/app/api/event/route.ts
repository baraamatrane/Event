import { NextRequest, NextResponse } from "next/server";
import Event from "../../../../lib/models/Event";

export async function POST(req: NextRequest) {
  try {
    const { title, description, image, date, place, user } = await req.json();
    const NewEvent = new Event({
      title,
      description,
      image,
      date,
      place,
      user,
    });
    const Createdevent = await NewEvent.save();
    return NextResponse.json({ Createdevent }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
