"use client";
import { useState } from "react";
import { useEffect } from "react";
import type { Resource } from "@prisma/client";

interface ResourceWithUploader extends Resource {
  uploadedBy?: { username: string } | null;
}

export default function PublicUploadPage() {
  const [uploadType, setUploadType] = useState<'file' | 'link'>('link');
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState("");
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState("");
  const [publicUploading, setPublicUploading] = useState<boolean | null>(null);
  const [resources, setResources] = useState<ResourceWithUploader[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/resources")
      .then(res => res.json())
      .then(data => {
        setResources(data.resources || []);
        setLoading(false);
      });
    fetch("/api/resources", { method: "OPTIONS" })
      .then(res => res.json())
      .then(data => {
        const setting = (data.settings || []).find((s: any) => s.key === "public_uploading");
        setPublicUploading(setting?.value === "on");
      });
  }, []);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    setMsg("");
    if (uploadType === 'file' && file) {
      const formData = new FormData();
      formData.append('file', file);
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
      if (data.success) fetchResources();
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
      if (data.success) fetchResources();
    } else {
      setUploading(false);
      setMsg("Please select a file or enter a link.");
    }
  }

  async function fetchResources() {
    setLoading(true);
    const res = await fetch("/api/resources");
    const data = await res.json();
    setResources(data.resources || []);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Share a File or Link</h2>
        {publicUploading === null ? (
          <div className="text-center text-gray-500">Checking upload status...</div>
        ) : !publicUploading ? (
          <div className="text-center text-red-600 bg-red-100 dark:bg-red-900/30 rounded p-4 mb-4">
            Public uploading is turned off.<br />
            Please request the admin to enable it.
          </div>
        ) : (
          <form onSubmit={handleUpload} className="bg-white dark:bg-gray-800 rounded shadow p-6 w-full flex flex-col gap-4 mb-6">
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
        )}
        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white text-center">All Shared Resources</h3>
          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : resources.length === 0 ? (
            <div className="text-center text-gray-500">No resources available.</div>
          ) : (
            <ul className="space-y-4">
              {resources.map(r => (
                <li key={r.id} className="bg-gray-100 dark:bg-gray-700 rounded p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className="font-semibold text-blue-700 dark:text-blue-300 mr-2">{r.type === 'file' ? 'File:' : 'Link:'}</span>
                    {r.type === 'file' ? (
                      <a href={r.url || undefined} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{r.filename || r.url}</a>
                    ) : (
                      <a href={r.url || undefined} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{r.url}</a>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Uploaded by {r.uploaderType === 'admin' ? (r.uploadedBy?.username || 'Admin') : 'General Public'}<br />
                    {new Date(r.createdAt).toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
} 