"use client";
import { Button } from "@/components/ui/button";
import { set } from "mongoose";
import { useState } from "react";

export default function Forgotpass() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    if (res.ok) {
      setError("Email sent successfully");
    } else {
      setError("Failed to send email");
    }
  };
  return (
    <div className="w-full p-10 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 justify-center w-full max-w-md">
        <h2 className="text-2xl font-bold">Write your email</h2>
        <form className="w-full flex flex-col gap-4 mt-6 p-4 rounded-2xl">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
        </form>
        {error && (
          <div
            className={`${
              error === "Failed to send email"
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {error}
          </div>
        )}
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Sending..." : "Send Link"}
        </Button>
      </div>
    </div>
  );
}
