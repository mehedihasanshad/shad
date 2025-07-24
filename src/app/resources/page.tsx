"use client";
import { useEffect, useState } from "react";
import type { Resource } from "@prisma/client";

type ResourceWithUser = Resource & { uploadedBy?: { username: string } | null };

export default function ResourcesPage() {
  const [resources, setResources] = useState<ResourceWithUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    fetch("/api/resources")
      .then(res => res.json())
      .then(data => {
        setResources(data.resources || []);
        setLoading(false);
      });
  }, []);

  const filteredResources = resources.filter(r =>
    (r.filename || r.url || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Shared Resources</h2>
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full mb-4 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : filteredResources.length === 0 ? (
          <div className="text-center text-gray-500">No resources found.</div>
        ) : (
          <ul className="space-y-4">
            {filteredResources.map(r => (
              <li key={r.id} className="bg-gray-100 dark:bg-gray-700 rounded p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="mr-2">{r.type === 'file' ? getFileIcon(typeof r.filename === 'string' ? r.filename : undefined) : '🔗'}</span>
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
  );
} 