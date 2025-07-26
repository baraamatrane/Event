"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Signup() {
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
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      setLoading("Sign up");
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
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
        )}
        <button
          className={`${
            loading === "Sign up..."
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-400 cursor-pointer"
          }`}
          type="submit"
          style={{ width: "100%", padding: "0.5rem" }}
          disabled={loading === "Sign up..." ? true : false}
        >
          {loading}
        </button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        you already have an account? <a href="/Login">Log In</a>
      </p>
    </div>
  );
}
