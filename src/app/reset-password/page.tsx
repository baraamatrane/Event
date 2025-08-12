"use client";
import { Button } from "@/components/ui/button";
import { set } from "mongoose";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Forgotpass() {
  const token = useSearchParams().get("token");
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!token || token === "") {
    return (
      <div className="w-full p-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 justify-center w-full max-w-md">
          <h2 className="text-2xl font-bold">Invalid or missing token</h2>
        </div>
      </div>
    );
  }
  useEffect(() => {
    const validateToken = async () => {
      const res = await fetch(`/api/validate-token?token=${token}`);
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        setTokenValid(data.isValid);
      }
    };
    if (token) {
      validateToken();
    }
  }, [token]);
  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError("");
    const res = await fetch("/api/new-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, token }),
    });
    setLoading(false);
    if (res.ok) {
      setError("Password updated successfully");
    } else {
      const data = await res.json();
      setError(data.message || "Something went wrong");
    }
  };
  if (tokenValid === false) {
    return (
      <div className="w-full p-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 justify-center w-full max-w-md">
          <h2 className="text-2xl font-bold">Invalid or expired token</h2>
        </div>
      </div>
    );
  }

  if (tokenValid === null) {
    return (
      <div className="w-full p-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 justify-center w-full max-w-md">
          <h2 className="text-2xl font-bold">Validating token...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-10 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 justify-center w-full max-w-md">
        <h2 className="text-2xl font-bold">Reset your password</h2>
        <form className="w-full flex flex-col gap-4 mt-6 p-4 rounded-2xl">
          <input
            type="password"
            placeholder="New Password"
            className="border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="border rounded px-3 py-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </form>
        {error && (
          <p
            className={`${
              error === "Password updated successfully"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {error}
          </p>
        )}
        <Button onClick={handleResetPassword} disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </Button>
      </div>
    </div>
  );
}
