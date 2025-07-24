"use client";
import { useEffect, useState } from "react";

export default function ResourcesPage() {
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/resources")
      .then(res => res.json())
      .then(data => {
        setResources(data.resources || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Shared Resources</h2>
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
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{r.filename}</a>
                  ) : (
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{r.url}</a>
                  )}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{new Date(r.createdAt).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 