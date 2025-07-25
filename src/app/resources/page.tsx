"use client";
import { useEffect, useState } from "react";
import type { Resource } from "@prisma/client";
import { Download, Eye, ExternalLink, X, Image as ImageIcon } from "lucide-react";

type ResourceWithUser = Resource & { uploadedBy?: { username: string } | null };

interface ResourceWithUploader extends Resource {
  uploadedBy?: { username: string } | null;
  uploaderType: string;
}

function safeHref(url: string | null | undefined): string | undefined {
  if (typeof url === 'string') return url;
  return undefined;
}

const FILE_ICONS: Record<string, string> = {
  pdf: '📄',
  doc: '📄',
  docx: '📄',
  png: '🖼️',
  jpg: '🖼️',
  jpeg: '🖼️',
  gif: '🖼️',
  mp4: '🎬',
  mp3: '🎵',
  zip: '🗜️',
  txt: '📝',
  csv: '📊',
  xlsx: '📊',
  pptx: '📊',
};

function getFileIcon(filename?: string) {
  if (!filename) return '📁';
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  return FILE_ICONS[ext] || '📁';
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<ResourceWithUploader[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState('all');
  
  // Upload states
  const [uploadType, setUploadType] = useState<'file' | 'link'>('link');
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState("");
  const [publicUploading, setPublicUploading] = useState<boolean | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [previewResource, setPreviewResource] = useState<ResourceWithUploader | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchResources();
    fetch("/api/resources", { method: "OPTIONS" })
      .then(res => res.json())
      .then(data => {
        const setting = (data.settings as { key: string; value: string }[] || []).find((s) => s.key === "public_uploading");
        setPublicUploading(setting ? setting.value === "on" : false);
      });
  }, []);

  async function fetchResources() {
    setLoading(true);
    const res = await fetch("/api/resources");
    const data = await res.json();
    setResources(data.resources || []);
    setLoading(false);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    setMsg("");
    if (uploadType === 'file' && file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('public', 'true');
      formData.append('active', 'true');
      if (title) formData.append('title', title);
      if (description) formData.append('description', description);
      const res = await fetch("/api/resources/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setUploading(false);
      setMsg(data.success ? "File shared!" : data.error || "Upload failed");
      if (data.success) {
        setFile(null);
        setTitle("");
        setDescription("");
        fetchResources();
        setShowUploadForm(false);
      }
    } else if (uploadType === 'link' && link) {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          type: 'link', 
          url: link, 
          title: title || undefined,
          description: description || undefined,
          thumbnail: thumbnail || undefined,
          public: true, 
          active: true 
        }),
      });
      const data = await res.json();
      setUploading(false);
      setMsg(data.success ? "Link shared!" : data.error || "Upload failed");
      if (data.success) {
        setLink("");
        setTitle("");
        setDescription("");
        setThumbnail("");
        fetchResources();
        setShowUploadForm(false);
      }
    } else {
      setUploading(false);
      setMsg("Please select a file or enter a link.");
    }
  }

  function openPreview(resource: ResourceWithUploader) {
    setPreviewResource(resource);
    setShowPreview(true);
  }

  function closePreview() {
    setPreviewResource(null);
    setShowPreview(false);
  }

  function downloadFile(resource: ResourceWithUploader) {
    if (resource.url) {
      const link = document.createElement('a');
      link.href = resource.url;
      link.download = resource.filename || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  function getFileType(filename?: string) {
    if (!filename) return 'unknown';
    const ext = filename.split('.').pop()?.toLowerCase() || '';
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'image';
    if (['pdf'].includes(ext)) return 'pdf';
    if (['mp4', 'webm', 'ogg'].includes(ext)) return 'video';
    if (['mp3', 'wav', 'ogg'].includes(ext)) return 'audio';
    if (['doc', 'docx'].includes(ext)) return 'document';
    return 'file';
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

  const filteredResources = resources
    .filter(r => (filterType === 'all' ? true : r.type === filterType))
    .filter(r => (r.filename || r.url || '').toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-4">
            <span className="text-xl sm:text-2xl text-white">📚</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Shared Resources</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Discover and access shared files and links</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search, Filter and Upload Button */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
              
              <select 
                value={filterType} 
                onChange={e => setFilterType(e.target.value)} 
                className="px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                aria-label="Filter resources by type"
              >
                <option value="all">All Resources</option>
                <option value="file">📁 Files Only</option>
                <option value="link">🔗 Links Only</option>
              </select>

              <button
                type="button"
                onClick={() => setShowUploadForm(!showUploadForm)}
                className="px-4 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base flex items-center justify-center"
              >
                <span className="mr-2">📤</span>
                {showUploadForm ? 'Hide Upload' : 'Share Resource'}
              </button>
            </div>
            
            {filteredResources.length > 0 && (
              <div className="mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                Showing {filteredResources.length} of {resources.length} resources
              </div>
            )}
          </div>

          {/* Upload Form */}
          {showUploadForm && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
              {publicUploading === null ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    <span className="text-blue-700 dark:text-blue-300">Checking upload status...</span>
                  </div>
                </div>
              ) : !publicUploading ? (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 sm:p-6">
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
                <form onSubmit={handleUpload} className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Share a Resource</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Upload a file or share a link with the community</p>
                  </div>

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

                  {/* Title and Description Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="title-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Title (optional)
                      </label>
                      <input
                        id="title-input"
                        type="text"
                        placeholder="Enter a title for your resource"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="description-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Description (optional)
                      </label>
                      <input
                        id="description-input"
                        type="text"
                        placeholder="Brief description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
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
                      <div className="space-y-4">
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
                        <div>
                          <label htmlFor="thumbnail-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Thumbnail URL (optional)
                          </label>
                          <input
                            id="thumbnail-input"
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            value={thumbnail}
                            onChange={e => setThumbnail(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Add a preview image for your link
                          </p>
                        </div>
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
              )}
            </div>
          )}

          {/* Resources Grid */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
            {loading ? (
              <div className="text-center py-8 sm:py-12">
                <div className="inline-block animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Loading resources...</p>
              </div>
            ) : filteredResources.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <div className="text-4xl sm:text-6xl mb-4">
                  {search || filterType !== 'all' ? '🔍' : '📭'}
                </div>
                <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-2">
                  {search || filterType !== 'all' ? 'No resources match your search' : 'No resources available'}
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  {search || filterType !== 'all' ? 'Try adjusting your search terms or filters' : 'Check back later for new resources'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredResources.map(r => (
                  <div key={r.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-200 overflow-hidden">
                    {/* Thumbnail or Icon */}
                    <div className="relative h-32 sm:h-40 bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                      {r.type === 'link' && r.thumbnail ? (
                        <img 
                          src={r.thumbnail} 
                          alt={r.title || 'Link preview'} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`flex items-center justify-center w-full h-full ${r.type === 'link' && r.thumbnail ? 'hidden' : ''}`}>
                        <span className="text-3xl sm:text-4xl">
                          {r.type === 'file' ? getFileIcon(typeof r.filename === 'string' ? r.filename : undefined) : '🔗'}
                        </span>
                      </div>
                      
                      {/* Type Badge */}
                      <div className="absolute top-2 right-2">
                        <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                          {r.type === 'file' ? 'File' : 'Link'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      {/* Resource Title */}
                      <div className="mb-3">
                        {r.title ? (
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 line-clamp-2">
                            {r.title}
                          </h4>
                        ) : null}
                        
                        <div className="text-xs text-blue-600 dark:text-blue-400 truncate">
                          {r.type === 'file' 
                            ? (typeof r.filename === 'string' && r.filename.length > 0 ? r.filename : 'File')
                            : (typeof r.url === 'string' ? new URL(r.url).hostname : 'Link')
                          }
                        </div>
                        
                        {/* Display description if available */}
                        {r.description && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                            {r.description}
                          </p>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 mb-3">
                        <button
                          onClick={() => openPreview(r)}
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                        >
                          <Eye className="w-3 h-3" />
                          Preview
                        </button>
                        
                        {r.type === 'file' ? (
                          <button
                            onClick={() => downloadFile(r)}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors"
                          >
                            <Download className="w-3 h-3" />
                            Download
                          </button>
                        ) : (
                          <a
                            href={safeHref(r.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Visit
                          </a>
                        )}
                      </div>
                      
                      {/* Resource Info */}
                      <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                        <p className="truncate">
                          By {r.uploaderType === 'admin' ? (r.uploadedBy?.username || 'Admin') : 'Public'}
                        </p>
                        <p>{new Date(r.createdAt).toLocaleDateString()}</p>
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