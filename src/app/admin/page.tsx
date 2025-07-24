"use client";
import { useState, useEffect } from "react";
import type { Resource } from "@prisma/client";

interface ResourceWithUploader extends Resource {
  uploadedBy?: { username: string } | null;
}

const AVATAR_ICON = {
  admin: '🧑‍💼',
  public: '👥',
};
const STATUS_BADGE = (active: boolean, pub: boolean) => (
  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mr-2 ${active ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'}`}>{active ? 'Active' : 'Inactive'}</span>
);
const PUBLIC_BADGE = (pub: boolean) => (
  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${pub ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-600'}`}>{pub ? 'Public' : 'Private'}</span>
);

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
  const [publicUploading, setPublicUploading] = useState<boolean | null>(null);
  const [resources, setResources] = useState<ResourceWithUploader[]>([]);
  const [filterType, setFilterType] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'desc' | 'asc'>('desc');
  const [showToast, setShowToast] = useState<{msg: string, type: 'success' | 'error'}|null>(null);
  const [progress, setProgress] = useState(0);

  // On mount, check for JWT in localStorage
  useEffect(() => {
    const storedJwt = typeof window !== 'undefined' ? localStorage.getItem('admin_jwt') : null;
    if (storedJwt) setJwt(storedJwt);
  }, []);

  // When JWT changes, store/remove in localStorage
  useEffect(() => {
    if (jwt) {
      localStorage.setItem('admin_jwt', jwt);
    } else {
      localStorage.removeItem('admin_jwt');
    }
  }, [jwt]);

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

  // Fetch global settings after login
  useEffect(() => {
    if (jwt) fetchSettings();
    // eslint-disable-next-line
  }, [jwt]);

  async function fetchSettings() {
    const res = await fetch("/api/resources", {
      method: "OPTIONS",
      headers: { Authorization: `Bearer ${jwt}` },
    });
    const data = await res.json();
    const setting = (data.settings || []).find((s: any) => s.key === "public_uploading");
    setPublicUploading(setting?.value === "on");
  }

  async function togglePublicUploading() {
    const newValue = publicUploading ? "off" : "on";
    await fetch("/api/resources", {
      method: "PUT",
      headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "application/json" },
      body: JSON.stringify({ key: "public_uploading", value: newValue }),
    });
    setPublicUploading(!publicUploading);
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

  const filteredResources = resources
    .filter(r => (filterType === 'all' ? true : r.type === filterType))
    .filter(r => (r.filename || r.url || '').toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sort === 'desc' ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  function showNotification(msg: string, type: 'success' | 'error') {
    setShowToast({msg, type});
    setTimeout(() => setShowToast(null), 3000);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    setUploadMsg("");
    setProgress(0);
    if (uploadType === 'file' && file) {
      const formData = new FormData();
      formData.append('file', file);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/resources/upload');
      xhr.setRequestHeader('Authorization', `Bearer ${jwt}`);
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
      };
      xhr.onload = () => {
        setUploading(false);
        setProgress(0);
        try {
          const data = JSON.parse(xhr.responseText);
          showNotification(data.success ? "File uploaded!" : data.error || "Upload failed", data.success ? 'success' : 'error');
          if (data.success) fetchResources();
        } catch {
          showNotification("Upload failed", 'error');
        }
      };
      xhr.onerror = () => {
        setUploading(false);
        setProgress(0);
        showNotification("Upload failed", 'error');
      };
      xhr.send(formData);
    } else if (uploadType === 'link' && link) {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "application/json" },
        body: JSON.stringify({ type: 'link', url: link }),
      });
      const data = await res.json();
      setUploading(false);
      showNotification(data.success ? "Link uploaded!" : data.error || "Upload failed", data.success ? 'success' : 'error');
      if (data.success) fetchResources();
    } else {
      setUploading(false);
      showNotification("Please select a file or enter a link.", 'error');
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

  async function handleDelete(id: number) {
    if (!window.confirm('Are you sure you want to delete this resource?')) return;
    await fetch(`/api/resources/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${jwt}` },
    });
    fetchResources();
    showNotification('Resource deleted.', 'success');
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
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Admin Dashboard</h2>
        <button onClick={() => setJwt(null)} className="mb-4 text-red-600 underline">Logout</button>
        {showToast && (
          <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded shadow-lg ${showToast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>{showToast.msg}</div>
        )}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">Upload File or Link</h3>
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
              {uploading ? `Uploading...${progress ? ` (${progress}%)` : ''}` : uploadType === 'file' ? 'Upload File' : 'Upload Link'}
            </button>
            {progress > 0 && uploading && (
              <div className="w-full bg-gray-200 rounded h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded" style={{ width: `${progress}%` }}></div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">Public Uploading:</span>
            {publicUploading === null ? (
              <span className="text-xs text-gray-500">Loading...</span>
            ) : (
              <button
                onClick={togglePublicUploading}
                className={`px-3 py-1 rounded text-xs font-semibold ${publicUploading ? 'bg-green-600 text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
              >
                {publicUploading ? 'ON' : 'OFF'}
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-1/2 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <select value={filterType} onChange={e => setFilterType(e.target.value)} className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
            <option value="all">All Types</option>
            <option value="file">Files</option>
            <option value="link">Links</option>
          </select>
          <select value={sort} onChange={e => setSort(e.target.value as 'asc' | 'desc')} className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
            <option value="desc">Newest</option>
            <option value="asc">Oldest</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredResources.length === 0 ? (
            <div className="text-gray-500 text-center py-4 col-span-2">No resources found.</div>
          ) : filteredResources.map(r => (
            <div key={r.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col gap-2 shadow-sm relative">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{AVATAR_ICON[r.uploaderType as 'admin' | 'public']}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{r.uploaderType === 'admin' ? (r.uploadedBy?.username || 'Admin') : 'General Public'}</span>
                {STATUS_BADGE(r.active, r.public)}
                {PUBLIC_BADGE(r.public)}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">{r.type === 'file' ? '📄' : '🔗'}</span>
                {r.type === 'file' ? (
                  <a href={r.url || undefined} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{r.filename || r.url}</a>
                ) : (
                  <a href={r.url || undefined} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{r.url}</a>
                )}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" checked={r.active} onChange={e => toggleResource(r.id, 'active', e.target.checked)} />
                  <span className="text-xs">Active</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" checked={r.public} onChange={e => toggleResource(r.id, 'public', e.target.checked)} />
                  <span className="text-xs">Public</span>
                </label>
                <button onClick={() => handleDelete(r.id)} className="ml-auto text-red-600 hover:underline text-xs">Delete</button>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{new Date(r.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 