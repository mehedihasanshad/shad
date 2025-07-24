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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Share Resources
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Upload files or share links with the community
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <label htmlFor="search" className="sr-only">Search resources</label>
          <input
            id="search"
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Upload Status Check */}
        {publicUploading === null ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
              <span className="text-blue-700 dark:text-blue-300">Checking upload status...</span>
            </div>
          </div>
        ) : !publicUploading ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 sm:p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                  Public uploading is disabled
                </h3>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                  Please contact an administrator to enable public file sharing.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Upload Form */
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6">
            <form onSubmit={handleUpload} className="space-y-6">
              {/* Upload Type Selection */}
              <div>
                <fieldset>
                  <legend className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Choose upload type
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                      uploadType === 'link' 
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                    }`}>
                      <input
                        type="radio"
                        name="upload-type"
                        value="link"
                        checked={uploadType === 'link'}
                        onChange={() => setUploadType('link')}
                        className="sr-only"
                      />
                      <div className="flex items-center">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900 dark:text-white flex items-center">
                            <span className="mr-2">🔗</span>
                            Share Link
                          </div>
                          <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                            External URL
                          </div>
                        </div>
                      </div>
                    </label>
                    
                    <label className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                      uploadType === 'file' 
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
                    }`}>
                      <input
                        type="radio"
                        name="upload-type"
                        value="file"
                        checked={uploadType === 'file'}
                        onChange={() => setUploadType('file')}
                        className="sr-only"
                      />
                      <div className="flex items-center">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900 dark:text-white flex items-center">
                            <span className="mr-2">📁</span>
                            Upload File
                          </div>
                          <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                            Max 10MB
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </fieldset>
              </div>

              {/* Upload Input */}
              <div>
                {uploadType === 'file' ? (
                  <div>
                    <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select file to upload
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600 dark:text-gray-400">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.mp4,.zip"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PDF, DOC, PNG, JPG, MP4, ZIP up to 10MB
                        </p>
                        {file && (
                          <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                            Selected: {file.name}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="link-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Enter URL to share
                    </label>
                    <input
                      id="link-input"
                      type="url"
                      placeholder="https://example.com"
                      value={link}
                      onChange={e => setLink(e.target.value)}
                      className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={uploading || (uploadType === 'file' && !file) || (uploadType === 'link' && !link)}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {uploading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sharing...
                  </div>
                ) : (
                  uploadType === 'file' ? 'Share File' : 'Share Link'
                )}
              </button>

              {/* Message Display */}
              {msg && (
                <div className={`p-3 rounded-lg text-sm text-center ${
                  msg.includes('failed') || msg.includes('not allowed') || msg.includes('too large')
                    ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                    : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                }`}>
                  {msg}
                </div>
              )}
            </form>
          </div>
        )}
        {/* Resources List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Shared Resources
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} available
            </p>
          </div>
          
          <div className="p-4 sm:p-6">
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2"></div>
                  <span className="text-gray-600 dark:text-gray-300">Loading resources...</span>
                </div>
              </div>
            ) : filteredResources.length === 0 ? (
              <div className="text-center py-8">
                <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">No resources found</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {search ? 'Try adjusting your search terms' : 'Be the first to share a resource!'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredResources
                  .filter(r => typeof r.url === 'string')
                  .map(r => (
                    <div key={r.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-start space-x-3">
                        {/* Icon */}
                        <div className="flex-shrink-0 text-2xl">
                          {r.type === 'file' ? getFileIcon(typeof r.filename === 'string' ? r.filename : undefined) : '🔗'}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                              {r.type === 'file' ? 'File' : 'Link'}
                            </span>
                          </div>
                          
                          <div className="mb-2">
                            {r.type === 'file' ? (
                              <a
                                href={safeHref(r.url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium break-all transition-colors"
                              >
                                {typeof r.filename === 'string' && r.filename.length > 0 ? r.filename : (typeof r.url === 'string' ? r.url : '')}
                              </a>
                            ) : (
                              <a
                                href={safeHref(r.url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium break-all transition-colors"
                              >
                                {typeof r.url === 'string' ? r.url : ''}
                              </a>
                            )}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 dark:text-gray-400 space-y-1 sm:space-y-0">
                            <span>
                              Shared by {r.uploaderType === 'admin' ? (r.uploadedBy?.username || 'Admin') : 'General Public'}
                            </span>
                            <span className="sm:text-right">
                              {new Date(r.createdAt).toLocaleDateString()} at {new Date(r.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 