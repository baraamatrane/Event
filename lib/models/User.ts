import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: false,
    },
    lastName: {
      type: String,
      trim: true,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    address: {
      address: String,
      city: String,
      phone: String,
    },

    createdDate: {
      type: Date,
      default: Date.now,
    },
    Role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    Booking: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    wishlist: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Event",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
