"use client";
import { useState } from "react";
import { useEffect } from "react";
import type { Resource } from "@prisma/client";

const FILE_ICONS: Record<string, string> = {
  pdf: '📄',
  doc: '📄',
  docx: '📄',
  png: '🖼️',
  jpg: '🖼️',
  jpeg: '🖼️',
  mp4: '🎬',
  zip: '🗜️',
};

function getFileIcon(filename?: string) {
  if (!filename) return '📁';
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  return FILE_ICONS[ext] || '📁';
}

interface ResourceWithUploader extends Resource {
  uploadedBy?: { username: string } | null;
  uploaderType: string;
}

function safeHref(url: string | null | undefined): string | undefined {
  if (typeof url === 'string') return url;
  return undefined;
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
  const [search, setSearch] = useState("");
  const filteredResources = resources.filter(r =>
    (r.filename || r.url || '').toLowerCase().includes(search.toLowerCase())
  );

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
        const setting = (data.settings as { key: string; value: string }[] || []).find((s) => s.key === "public_uploading");
        setPublicUploading(setting ? setting.value === "on" : false);
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

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    if (f) {
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/png',
        'image/jpeg',
        'image/jpg',
        'video/mp4',
        'application/zip',
      ];
      if (!allowedTypes.includes(f.type)) {
        setMsg('File type not allowed.');
        setFile(null);
        return;
      }
      if (f.size > 10 * 1024 * 1024) {
        setMsg('File too large (max 10MB).');
        setFile(null);
        return;
      }
    }
    setFile(f);
    setMsg("");
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Share a File or Link</h2>
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full mb-4 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
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
              <input type="file" onChange={handleFileChange} className="bg-gray-100 dark:bg-gray-700 rounded p-2" />
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
          ) : filteredResources.length === 0 ? (
            <div className="text-center text-gray-500">No resources found.</div>
          ) : (
            <ul className="space-y-4">
              {filteredResources
                .filter(r => typeof r.url === 'string')
                .map(r => (
                  <li key={r.id} className="bg-gray-100 dark:bg-gray-700 rounded p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <span className="mr-2">{r.type === 'file' ? getFileIcon(typeof r.filename === 'string' ? r.filename : undefined) : '🔗'}</span>
                      <span className="font-semibold text-blue-700 dark:text-blue-300 mr-2">{r.type === 'file' ? 'File:' : 'Link:'}</span>
                      {r.type === 'file' ? (
                        <a
                          href={safeHref(r.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline break-all"
                        >
                          {typeof r.filename === 'string' && r.filename.length > 0 ? r.filename : (typeof r.url === 'string' ? r.url : '')}
                        </a>
                      ) : (
                        <a
                          href={safeHref(r.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline break-all"
                        >
                          {typeof r.url === 'string' ? r.url : ''}
                        </a>
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