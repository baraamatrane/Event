"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Example POST request (replace URL with your API endpoint)
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      setLoading(false);
      if (!res.ok) {
        setError("Invalid credentials");
      } else {
        setError("Log in sucsseful");
      }
    } catch {
      setError("Something went wrong");
    }
  };

  return (
    <div className="w-full p-10 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 justify-center w-full max-w-md">
        <h2 className="text-2xl font-bold">Welcome back</h2>
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
          <Link href="/forgot-password">
            {" "}
            <h2 className="text-sm text-gray-500 text-end">Forgot password?</h2>
          </Link>
          {error && <div className="text-red-500">{error}</div>}
          <Button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        <div className="text-gray-500">
          Don't have an account?
          <Link href="/signup" className="text-yellow-300">
            <span> Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
