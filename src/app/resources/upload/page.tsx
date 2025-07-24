"use client";
import { useState } from "react";

export default function PublicUploadPage() {
  const [uploadType, setUploadType] = useState<'file' | 'link'>('link');
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState("");
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    setMsg("");
    if (uploadType === 'file' && file) {
      const formData = new FormData();
      formData.append('file', file);
      // Add public/active flags as JSON in a separate field
      formData.append('public', 'true');
      formData.append('active', 'true');
      const res = await fetch("/api/resources/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setUploading(false);
      setMsg(data.success ? "File shared!" : data.error || "Upload failed");
      if (data.success) setFile(null);
    } else if (uploadType === 'link' && link) {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: 'link', url: link, public: true, active: true }),
      });
      const data = await res.json();
      setUploading(false);
      setMsg(data.success ? "Link shared!" : data.error || "Upload failed");
      if (data.success) setLink("");
    } else {
      setUploading(false);
      setMsg("Please select a file or enter a link.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 flex items-center justify-center">
      <form onSubmit={handleUpload} className="bg-white dark:bg-gray-800 rounded shadow p-6 w-full max-w-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Share a File or Link</h2>
        <div className="flex gap-4 mb-2">
          <label>
            <input type="radio" checked={uploadType === 'link'} onChange={() => setUploadType('link')} /> Link
          </label>
          <label>
            <input type="radio" checked={uploadType === 'file'} onChange={() => setUploadType('file')} /> File
          </label>
        </div>
        {uploadType === 'file' ? (
          <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} className="bg-gray-100 dark:bg-gray-700 rounded p-2" />
        ) : (
          <input
            type="url"
            placeholder="https://..."
            value={link}
            onChange={e => setLink(e.target.value)}
            className="bg-gray-100 dark:bg-gray-700 rounded p-2 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
            required
          />
        )}
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition" disabled={uploading}>
          {uploading ? "Sharing..." : uploadType === 'file' ? 'Share File' : 'Share Link'}
        </button>
        {msg && <div className="text-center text-green-600 dark:text-green-400">{msg}</div>}
      </form>
    </div>
  );
} 