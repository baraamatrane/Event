"use client";
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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      setLoading(false);
      if (!res.ok) {
        setError("Invalid credentials");
      } else {
        // Handle successful sign-in (e.g., redirect)
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
          className={`${loading ? "bg-blue-300" : "bg-blue-400"}`}
          type="submit"
          style={{ width: "100%", padding: "0.5rem" }}
        >
          {loading ? "Log in..." : "Log in"}
        </button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}
