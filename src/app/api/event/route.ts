import { NextRequest, NextResponse } from "next/server";
import Event from "../../../../lib/models/Event";
import connectDB from "../../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    // Only allow the user from the token to create events for themselves
    const {
      title,
      description,
      image,
      date,
      place,
      host,
      category,
      price,
      type,
    } = await req.json();

    // Basic input validation
    if (
      !title ||
      !description ||
      !image ||
      !date ||
      !place ||
      !host ||
      !price ||
      !type ||
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
      price,
      type,
    });
    const Createdevent = await NewEvent.save();
    return NextResponse.json({ Createdevent }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const page = Number(req.nextUrl.searchParams.get("page")) || 1;
    const limit = Number(req.nextUrl.searchParams.get("limit")) || 5;
    const search = req.nextUrl.searchParams.get("search_query");
    const category = req.nextUrl.searchParams.get("category");
    const location = req.nextUrl.searchParams.get("location");
    const skip = (page - 1) * limit;

    // Build query dynamically
    const query: Record<string, any> = {};
    if (page < 1 || limit < 1) {
      return NextResponse.json(
        { error: "Invalid pagination parameters" },
        { status: 400 }
      );
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (location) {
      query.$or = [
        { title: { $regex: location, $options: "i" } },
        { description: { $regex: location, $options: "i" } },
        { place: { $regex: location, $options: "i" } },
      ];
    }
    if (category) {
      query.category = category;
    }
    if (location) {
      // Use $regex for partial and case-insensitive location match
      query.place = { $regex: location, $options: "i" };
    }
    const Events = await Event.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ date: 1 }); // Optional: sort by date

    return NextResponse.json({ Events }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
