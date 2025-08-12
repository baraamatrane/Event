"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Signup() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("Sign up");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading("Sign up...");
    // Example POST request (replace URL with your API endpoint)
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: Name, email, password }),
      });
      setLoading("Sign up");
      if (res.status === 201) {
        const data = await res.json();
        console.log(data);
        setError("Sign up successful");
      }
      if (!res.ok) {
        setError("Invalid credentials");
      } else {
        return redirect("/");
      }
    } catch {
      setError("Something went wrong");
    }
  };

  return (
    <div className="w-full p-10 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 justify-center w-full max-w-md">
        <h2 className="text-2xl font-bold">Join the learning revolution</h2>
        <p className="text-gray-600">Where curiosity meets opportunity</p>
        <div className="flex gap-4 items-center">
          <Button variant="ghost" onClick={() => signIn("google")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-brand-google"
              onClick={() => signIn("google")}
            >
              <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z"></path>
            </svg>
            Continue with Google
          </Button>
          <Button variant="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
            Continue with Github
          </Button>
        </div>
        <form
          className="w-full flex flex-col gap-4 mt-6 border border-gray-400 p-4 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your full name"
            className="border rounded px-3 py-2"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="text-red-500">{error}</div>}
          <Button type="submit" disabled={loading !== "Sign up"}>
            {loading !== "Sign up" ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
        <div className="text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-yellow-300">
            <span> Log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
