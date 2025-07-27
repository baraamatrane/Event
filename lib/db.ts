import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: typeof import("mongoose") | null;
    promise: Promise<typeof import("mongoose")> | null;
  };
}

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

mongoose.connection.on("connected", () => {
  console.log("✅ Mongoose connected to DB");
});
mongoose.connection.on("error", (err) => {
  console.error("❌ Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("⚠️ Mongoose disconnected");
});

const connectDB = async () => {
  if (global.mongoose.conn) {
    console.log("✅ MongoDB already connected");
    return global.mongoose.conn;
  }
  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose
      .connect(MONGODB_URI!)
      .then((mongoose) => {
        return mongoose;
      });
  }
  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
};

export default connectDB;
