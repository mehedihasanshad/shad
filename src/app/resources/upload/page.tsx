"use client";
import { useState } from "react";

export default function PublicUploadPage() {
  const [link, setLink] = useState("");
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    setMsg("");
    const res = await fetch("/api/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: 'link', url: link, public: true, active: true }),
    });
    const data = await res.json();
    setUploading(false);
    setMsg(data.success ? "Link shared!" : data.error || "Upload failed");
    if (data.success) setLink("");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 flex items-center justify-center">
      <form onSubmit={handleUpload} className="bg-white dark:bg-gray-800 rounded shadow p-6 w-full max-w-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Share a Link</h2>
        <input
          type="url"
          placeholder="https://..."
          value={link}
          onChange={e => setLink(e.target.value)}
          className="bg-gray-100 dark:bg-gray-700 rounded p-2 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition" disabled={uploading}>
          {uploading ? "Sharing..." : "Share Link"}
        </button>
        {msg && <div className="text-center text-green-600 dark:text-green-400">{msg}</div>}
      </form>
    </div>
  );
} 