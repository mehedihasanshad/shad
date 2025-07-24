"use client";
import { useState } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.success && data.token) {
      setJwt(data.token);
      setUsername("");
      setPassword("");
    } else {
      setError(data.error || "Login failed");
    }
  }

  if (!jwt) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-8 rounded shadow w-full max-w-sm space-y-4">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Admin Login</h2>
          {error && <div className="text-red-600 text-center">{error}</div>}
          <input
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    );
  }

  // Dashboard UI placeholder
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Admin Dashboard</h2>
        <button onClick={() => setJwt(null)} className="mb-4 text-red-600 underline">Logout</button>
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Upload File or Link</h3>
          {/* Upload form will go here */}
          <div className="text-gray-500">(Upload form coming soon...)</div>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Your Resources</h3>
          {/* Resource list will go here */}
          <div className="text-gray-500">(Resource list coming soon...)</div>
        </div>
      </div>
    </div>
  );
} 