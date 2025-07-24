"use client";
import { useState, useEffect } from "react";
import type { Resource } from "@prisma/client";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadType, setUploadType] = useState<'file' | 'link'>('file');
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState("");
  const [resources, setResources] = useState<Resource[]>([]);

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

  // Fetch resources after login
  useEffect(() => {
    if (jwt) fetchResources();
    // eslint-disable-next-line
  }, [jwt]);

  async function fetchResources() {
    const res = await fetch("/api/resources", {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    const data = await res.json();
    setResources(data.resources || []);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    setUploadMsg("");
    if (uploadType === 'file' && file) {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch("/api/resources/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${jwt}` },
        body: formData,
      });
      const data = await res.json();
      setUploading(false);
      setUploadMsg(data.success ? "File uploaded!" : data.error || "Upload failed");
      if (data.success) fetchResources();
    } else if (uploadType === 'link' && link) {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "application/json" },
        body: JSON.stringify({ type: 'link', url: link }),
      });
      const data = await res.json();
      setUploading(false);
      setUploadMsg(data.success ? "Link uploaded!" : data.error || "Upload failed");
      if (data.success) fetchResources();
    } else {
      setUploading(false);
      setUploadMsg("Please select a file or enter a link.");
    }
    setFile(null);
    setLink("");
  }

  async function toggleResource(id: number, field: 'active' | 'public', value: boolean) {
    await fetch("/api/resources", {
      method: "PATCH",
      headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "application/json" },
      body: JSON.stringify({ id, [field]: value }),
    });
    fetchResources();
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

  // Dashboard UI
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Admin Dashboard</h2>
        <button onClick={() => setJwt(null)} className="mb-4 text-red-600 underline">Logout</button>
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Upload File or Link</h3>
          <form onSubmit={handleUpload} className="flex flex-col gap-2 mb-2">
            <div className="flex gap-4 mb-2">
              <label>
                <input type="radio" checked={uploadType === 'file'} onChange={() => setUploadType('file')} /> File
              </label>
              <label>
                <input type="radio" checked={uploadType === 'link'} onChange={() => setUploadType('link')} /> Link
              </label>
            </div>
            {uploadType === 'file' ? (
              <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} className="bg-gray-100 dark:bg-gray-700 rounded p-2" />
            ) : (
              <input type="url" placeholder="https://..." value={link} onChange={e => setLink(e.target.value)} className="bg-gray-100 dark:bg-gray-700 rounded p-2" />
            )}
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition" disabled={uploading}>
              {uploading ? "Uploading..." : "Upload"}
            </button>
            {uploadMsg && <div className="text-center text-green-600 dark:text-green-400">{uploadMsg}</div>}
          </form>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Your Resources</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="p-2">Type</th>
                  <th className="p-2">Name/URL</th>
                  <th className="p-2">Active</th>
                  <th className="p-2">Public</th>
                  <th className="p-2">Created</th>
                </tr>
              </thead>
              <tbody>
                {resources.map(r => (
                  <tr key={r.id} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-2">{r.type}</td>
                    <td className="p-2 break-all">
                      {r.type === 'file' ? (
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{r.filename}</a>
                      ) : (
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{r.url}</a>
                      )}
                    </td>
                    <td className="p-2 text-center">
                      <input type="checkbox" checked={r.active} onChange={e => toggleResource(r.id, 'active', e.target.checked)} />
                    </td>
                    <td className="p-2 text-center">
                      <input type="checkbox" checked={r.public} onChange={e => toggleResource(r.id, 'public', e.target.checked)} />
                    </td>
                    <td className="p-2">{new Date(r.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {resources.length === 0 && <div className="text-gray-500 text-center py-4">No resources yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
} 