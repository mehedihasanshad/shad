"use client";
import { useEffect, useState } from "react";
import type { Resource } from "@prisma/client";
import { Download, Eye, ExternalLink, X } from "lucide-react";
import Image from "next/image";



interface ResourceWithUploader extends Resource {
  uploadedBy?: { username: string } | null;
  uploaderType: string;
  thumbnail: string | null;
  title: string | null;
  description: string | null;
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

// Categories for filtering
const categories = ['All', 'Design', 'Education', 'Marketing', 'Development', 'Assets'];

export default function ResourcesPage() {
  const [resources, setResources] = useState<ResourceWithUploader[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
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
  const [thumbnail, setThumbnail] = useState<File | string | null>(null);
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
      let res;
      if (thumbnail && typeof thumbnail !== 'string') {
        // Send as multipart/form-data
        const formData = new FormData();
        formData.append('type', 'link');
        formData.append('url', link);
        if (title) formData.append('title', title);
        if (description) formData.append('description', description);
        formData.append('thumbnail', thumbnail);
        formData.append('public', 'true');
        formData.append('active', 'true');
        res = await fetch("/api/resources", {
          method: "POST",
          body: formData,
        });
      } else {
        // Send as JSON
        res = await fetch("/api/resources", {
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
      }
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
    .filter(r => {
      // Basic category filtering based on resource content (can be enhanced with proper categorization)
      if (selectedCategory === 'All') return true;

      const searchText = ((r.title || '') + ' ' + (r.description || '') + ' ' + (r.filename || '')).toLowerCase();

      switch (selectedCategory) {
        case 'Design':
          return searchText.includes('logo') || searchText.includes('design') || searchText.includes('graphics') || searchText.includes('visual') || searchText.includes('brand');
        case 'Education':
          return searchText.includes('education') || searchText.includes('tutorial') || searchText.includes('learn') || searchText.includes('course') || searchText.includes('math') || searchText.includes('physics');
        case 'Marketing':
          return searchText.includes('marketing') || searchText.includes('promotion') || searchText.includes('campaign') || searchText.includes('social') || searchText.includes('ads');
        case 'Development':
          return searchText.includes('code') || searchText.includes('development') || searchText.includes('programming') || searchText.includes('software') || searchText.includes('web');
        case 'Assets':
          return searchText.includes('asset') || searchText.includes('template') || searchText.includes('resource') || searchText.includes('tool') || searchText.includes('kit');
        default:
          return true;
      }
    })
    .filter(r => (r.filename || r.url || '').toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mt-12 lg:mt-14">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full mb-3">
            <span className="text-lg sm:text-xl text-white">📚</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Shared Resources</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Discover and access shared files and links</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search, Filter and Upload Button */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
            {/* Search and Upload Row */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
              <div className="relative flex-1">
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

              <button
                type="button"
                onClick={() => setShowUploadForm(!showUploadForm)}
                className="px-4 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base flex items-center justify-center whitespace-nowrap"
              >
                <span className="mr-2">📤</span>
                {showUploadForm ? 'Hide Upload' : 'Share Resource'}
              </button>
            </div>

            {/* Category Filter Buttons */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter Buttons */}
            <div className="space-y-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filter by Type</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    filterType === 'all'
                      ? 'bg-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                  }`}
                >
                  <span>📚</span>
                  All
                </button>
                <button
                  onClick={() => setFilterType('file')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    filterType === 'file'
                      ? 'bg-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                  }`}
                >
                  <span>📁</span>
                  Files
                </button>
                <button
                  onClick={() => setFilterType('link')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    filterType === 'link'
                      ? 'bg-emerald-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                  }`}
                >
                  <span>🔗</span>
                  Links
                </button>
              </div>
            </div>

            {filteredResources.length > 0 && (
              <div className="mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                Showing {filteredResources.length} of {resources.length} resources
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {filterType !== 'all' && ` (${filterType}s only)`}
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
                          <label htmlFor="thumbnail-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Upload Thumbnail Image (optional)
                          </label>

                          {/* Thumbnail Preview */}
                          {thumbnail && typeof thumbnail !== 'string' && (
                            <div className="mb-3">
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Preview:</p>
                              <Image
                                src={URL.createObjectURL(thumbnail)}
                                alt="Thumbnail preview"
                                width={128}
                                height={80}
                                className="w-32 h-20 object-cover rounded border"
                              />
                            </div>
                          )}

                          <input
                            id="thumbnail-upload"
                            type="file"
                            accept="image/*"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                // Validate file type
                                if (!file.type.startsWith('image/')) {
                                  setMsg('Please select an image file for thumbnail');
                                  return;
                                }
                                // Validate file size (max 5MB)
                                if (file.size > 5 * 1024 * 1024) {
                                  setMsg('Thumbnail file size must be less than 5MB');
                                  return;
                                }
                                setThumbnail(file);
                                setMsg('');
                              } else {
                                setThumbnail("");
                              }
                            }}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Upload an image to use as a thumbnail for your link (PNG, JPG, GIF up to 5MB)
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
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
                {filteredResources.map((r, index) => (
                  <div
                    key={r.id}
                    className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-600/50 overflow-hidden flex flex-col mb-6 sm:mb-8 break-inside-avoid group cursor-pointer transform-gpu transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-3 hover:rotate-1 hover:bg-white dark:hover:bg-gray-700/90 animate-fade-in-up"
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d',
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Gradient Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    {/* Enhanced Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500" />

                    {/* Thumbnail or Icon */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 overflow-hidden group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-gray-600 dark:group-hover:to-gray-700 transition-all duration-500">
                      {r.type === 'link' && r.thumbnail ? (
                        <a href={safeHref(r.url)} target="_blank" rel="noopener noreferrer" className="block w-full relative overflow-hidden">
                          <Image
                            src={r.thumbnail}
                            alt={r.title || 'Link thumbnail'}
                            width={400}
                            height={300}
                            className="w-full h-auto transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                            style={{
                              maxHeight: 'none',
                              objectFit: 'contain'
                            }}
                            onError={(e) => {
                              const target = e.currentTarget;
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="flex items-center justify-center w-full h-32 sm:h-40"><span class="text-3xl sm:text-4xl animate-bounce">🔗</span></div>`;
                              }
                            }}
                          />
                          {/* Image Overlay Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </a>
                      ) : (
                        <div className="flex items-center justify-center w-full h-32 sm:h-40 relative">
                          <div className="text-4xl sm:text-5xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 filter group-hover:drop-shadow-lg">
                            {r.type === 'file' ? getFileIcon(typeof r.filename === 'string' ? r.filename : undefined) : '🔗'}
                          </div>
                          {/* Icon Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      )}

                      {/* Enhanced Type Badge */}
                      <div className="absolute top-3 right-3 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm ${
                          r.type === 'file'
                            ? 'bg-emerald-500/90 text-white border border-emerald-400/50'
                            : 'bg-blue-500/90 text-white border border-blue-400/50'
                        }`}>
                          <span className="mr-1">
                            {r.type === 'file' ? '📄' : '🔗'}
                          </span>
                          {r.type === 'file' ? 'File' : 'Link'}
                        </span>
                      </div>

                      {/* Floating Action Dot */}
                      <div className="absolute top-3 left-3 w-3 h-3 bg-green-400 rounded-full shadow-lg opacity-75 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 animate-pulse" />
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="p-5 sm:p-6 space-y-4 transform transition-all duration-500 group-hover:translate-y-[-2px]">
                      {/* Resource Title & Meta */}
                      <div className="space-y-3">
                        {r.title && (
                          <h4 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg leading-tight transform transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {r.title}
                          </h4>
                        )}

                        <div className="flex items-center space-x-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 truncate group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                              {r.type === 'file'
                                ? (typeof r.filename === 'string' && r.filename.length > 0 ? r.filename : 'File')
                                : (typeof r.url === 'string' ? new URL(r.url).hostname : 'Link')
                              }
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                              {new Date(r.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        {r.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transform transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {r.description}
                          </p>
                        )}
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-3 transform transition-all duration-500 group-hover:scale-105 group-hover:translate-y-1">
                        <button
                          onClick={() => openPreview(r)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
                        >
                          <Eye className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-12" />
                          Preview
                        </button>

                        {r.type === 'file' ? (
                          <button
                            onClick={() => downloadFile(r)}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
                          >
                            <Download className="w-4 h-4 transform transition-transform duration-300 group-hover:bounce" />
                            Download
                          </button>
                        ) : (
                          <a
                            href={safeHref(r.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95"
                          >
                            <ExternalLink className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-12" />
                            Visit
                          </a>
                        )}
                      </div>

                      {/* Enhanced Resource Info */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200/50 dark:border-gray-600/50 transform transition-all duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-600/30">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                            <span className="text-xs text-white font-bold">
                              {r.uploaderType === 'admin' ? '👑' : '👤'}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transform transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {r.uploaderType === 'admin' ? (r.uploadedBy?.username || 'Admin') : 'Public'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {r.active ? '🟢' : '🔴'}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {r.active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Subtle Inner Border */}
                    <div className="absolute inset-0 rounded-2xl border border-white/20 dark:border-gray-700/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            )}
          </div>
          

        </div>
      </div>

      {/* Enhanced Preview Modal */}
      {showPreview && previewResource && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl max-w-6xl max-h-[95vh] w-full overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/50">
            {/* Enhanced Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  {previewResource.type === 'file' ? '📄' : '🔗'}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {previewResource.title || previewResource.filename || 'Resource Preview'}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                      previewResource.type === 'file'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {previewResource.type === 'file' ? 'File' : 'Link'}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      by {previewResource.uploaderType === 'admin' ? (previewResource.uploadedBy?.username || 'Admin') : 'General Public'}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={closePreview}
                className="p-3 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 rounded-full transition-all duration-300 hover:scale-110 group"
              >
                <X className="w-6 h-6 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200" />
              </button>
            </div>

            {/* Enhanced Modal Content */}
            <div className="overflow-auto" style={{ maxHeight: 'calc(95vh - 140px)' }}>
              {previewResource.type === 'file' ? (
                <div className="p-6">
                  {getFileType(previewResource.filename || '') === 'image' ? (
                    <div className="relative">
                      <Image
                        src={previewResource.url || ''}
                        alt={previewResource.title || previewResource.filename || 'Image'}
                        width={1200}
                        height={800}
                        className="w-full h-auto mx-auto rounded-xl shadow-2xl"
                        style={{
                          maxHeight: 'calc(80vh - 200px)',
                          objectFit: 'contain'
                        }}
                      />
                      {/* Image overlay with details */}
                      <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <h4 className="font-semibold">{previewResource.title || previewResource.filename}</h4>
                        {previewResource.description && (
                          <p className="text-sm text-gray-200 mt-1">{previewResource.description}</p>
                        )}
                      </div>
                    </div>
                  ) : getFileType(previewResource.filename || '') === 'pdf' ? (
                    <iframe
                      src={previewResource.url || ''}
                      className="w-full rounded-xl border-0 shadow-inner"
                      style={{ height: 'calc(80vh - 200px)', minHeight: '500px' }}
                      title="PDF Preview"
                    />
                  ) : getFileType(previewResource.filename || '') === 'video' ? (
                    <video
                      src={previewResource.url || ''}
                      controls
                      className="w-full h-auto mx-auto rounded-xl shadow-2xl"
                      style={{ maxHeight: 'calc(80vh - 200px)' }}
                    />
                  ) : getFileType(previewResource.filename || '') === 'audio' ? (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                        🎵
                      </div>
                      <audio
                        src={previewResource.url || ''}
                        controls
                        className="w-full max-w-md mx-auto"
                      />
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                        {getFileIcon(previewResource.filename || '')}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Preview not available
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                        This file type doesn&apos;t support preview. Download the file to view its contents.
                      </p>
                      <button
                        onClick={() => downloadFile(previewResource)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                      >
                        <Download className="w-5 h-5" />
                        Download File
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6">
                  {previewResource.thumbnail ? (
                    <div className="relative mb-6">
                      <Image
                        src={previewResource.thumbnail}
                        alt={previewResource.title || 'Link preview'}
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-xl shadow-2xl"
                        style={{
                          maxHeight: '400px',
                          objectFit: 'contain'
                        }}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl" />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-center">
                        <div className="text-6xl mb-2">🔗</div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">External Link</p>
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {previewResource.title || 'External Link'}
                    </h4>
                    {previewResource.description && (
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
                        {previewResource.description}
                      </p>
                    )}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 mb-6 border border-gray-200/50 dark:border-gray-700/50">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-mono break-all">
                        {previewResource.url}
                      </p>
                    </div>
                    <a
                      href={safeHref(previewResource.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Link
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-gray-50/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-sm font-bold">
                  {previewResource.uploaderType === 'admin' ? '👑' : '👤'}
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {previewResource.uploaderType === 'admin' ? (previewResource.uploadedBy?.username || 'Admin') : 'General Public'}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Shared on {new Date(previewResource.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                {previewResource.type === 'file' && (
                  <button
                    onClick={() => downloadFile(previewResource)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                )}
                <button
                  onClick={closePreview}
                  className="px-4 py-2 bg-gray-500/80 hover:bg-gray-600/80 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 