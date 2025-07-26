import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Global is used here to cache the connection in development
let isConnected: boolean = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI!);

    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDB;
