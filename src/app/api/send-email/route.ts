import z from "zod";
import connectDB from "../../../../lib/db";
import User from "../../../../lib/models/User";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    // Validate email
    const emailSchema = z.string().email();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    // Find user
    const FindUser = await User.findOne({ email: result.data });
    if (!FindUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check secret
    if (!process.env.JWT_SECRET) {
      return NextResponse.json(
        { message: "JWT secret not configured" },
        { status: 500 }
      );
    }

    // Create reset token
    const token = jwt.sign({ email: FindUser.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Reset link
    const link = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // Send email
    await transporter.sendMail({
      from: `"Circles" <${process.env.EMAIL_USER}>`,
      to: FindUser.email,
      subject: "Password Reset Request",
      html: `
        <h2>Password Reset Request</h2>
        <p>Hello,</p>
        <p>You requested to reset your password. Click the link below to set a new password:</p>
        <a href="${link}" target="_blank">${link}</a>
        <p>This link will expire in 1 hour.</p>
      `,
    });

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
