"use client";
import { useState, useEffect } from "react";
import type { Resource } from "@prisma/client";
import { Download, Eye, ExternalLink, X } from "lucide-react";

interface ResourceWithUploader extends Resource {
  uploadedBy?: { username: string } | null;
}

const AVATAR_ICON = {
  admin: '🧑‍💼',
  public: '👥',
};

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

const STATUS_BADGE = (active: boolean) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
    active 
      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  }`}>
    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${active ? 'bg-green-400' : 'bg-red-400'}`}></span>
    {active ? 'Active' : 'Inactive'}
  </span>
);

const PUBLIC_BADGE = (pub: boolean) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
    pub 
      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
      : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
  }`}>
    {pub ? '🌐 Public' : '🔒 Private'}
  </span>
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
  const [previewResource, setPreviewResource] = useState<ResourceWithUploader | null>(null);
  const [showPreview, setShowPreview] = useState(false);

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
    const setting = (data.settings as { key: string; value: string }[] || []).find((s) => s.key === "public_uploading");
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <span className="text-2xl text-white">🔐</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Portal</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in to manage resources</p>
          </div>
          
          <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Username
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {showToast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 max-w-sm ${
          showToast.type === 'success' 
            ? 'bg-green-600 text-white' 
            : 'bg-red-600 text-white'
        }`}>
          <div className="flex items-center">
            <span className="mr-2 text-lg">{showToast.type === 'success' ? '✅' : '❌'}</span>
            <span className="text-sm">{showToast.msg}</span>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                <span className="text-lg sm:text-xl text-white">⚡</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Manage resources and settings</p>
              </div>
            </div>
            <button 
              onClick={() => setJwt(null)} 
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm sm:text-base"
            >
              <span className="mr-2">🚪</span>
              Logout
            </button>
          </div>
        </div>
        {/* Upload Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="xl:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">📤</span>
                Upload Resource
              </h3>
              
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <label className="flex items-center cursor-pointer flex-1">
                    <input 
                      type="radio" 
                      checked={uploadType === 'file'} 
                      onChange={() => setUploadType('file')}
                      className="sr-only"
                    />
                    <div className={`flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded-lg border-2 transition-colors w-full text-sm sm:text-base ${
                      uploadType === 'file' 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}>
                      <span className="mr-2">📁</span>
                      File Upload
                    </div>
                  </label>
                  <label className="flex items-center cursor-pointer flex-1">
                    <input 
                      type="radio" 
                      checked={uploadType === 'link'} 
                      onChange={() => setUploadType('link')}
                      className="sr-only"
                    />
                    <div className={`flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded-lg border-2 transition-colors w-full text-sm sm:text-base ${
                      uploadType === 'link' 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}>
                      <span className="mr-2">🔗</span>
                      Link Share
                    </div>
                  </label>
                </div>
                
                {uploadType === 'file' ? (
                  <div className="space-y-2">
                    <input 
                      type="file" 
                      onChange={e => setFile(e.target.files?.[0] || null)} 
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Supported: PDF, DOC, DOCX, PNG, JPG, MP4, ZIP (max 10MB)
                    </p>
                  </div>
                ) : (
                  <input 
                    type="url" 
                    placeholder="https://example.com/resource" 
                    value={link} 
                    onChange={e => setLink(e.target.value)} 
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  />
                )}
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {uploadType === 'file' ? 'Uploading' : 'Sharing'}...
                      {progress > 0 && ` (${progress}%)`}
                    </>
                  ) : (
                    <>
                      <span className="mr-2">{uploadType === 'file' ? '📤' : '🔗'}</span>
                      {uploadType === 'file' ? 'Upload File' : 'Share Link'}
                    </>
                  )}
                </button>
                
                {progress > 0 && uploading && (
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Settings Panel */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">⚙️</span>
                Settings
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0 mr-4">
                    <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Public Uploading</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Allow public users to upload</p>
                  </div>
                  {publicUploading === null ? (
                    <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-6 w-12 rounded-full"></div>
                  ) : (
                    <button
                      onClick={togglePublicUploading}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        publicUploading ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          publicUploading ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">📊</span>
                Quick Stats
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Total Resources</span>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{resources.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Active</span>
                  <span className="font-semibold text-green-600 text-sm sm:text-base">{resources.filter(r => r.active).length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Public</span>
                  <span className="font-semibold text-blue-600 text-sm sm:text-base">{resources.filter(r => r.public).length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Resources Management */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <span className="mr-2">📋</span>
              Resource Management
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredResources.length} of {resources.length} resources
            </span>
          </div>
          
          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
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
            >
              <option value="all">All Types</option>
              <option value="file">📁 Files Only</option>
              <option value="link">🔗 Links Only</option>
            </select>
            
            <select 
              value={sort} 
              onChange={e => setSort(e.target.value as 'asc' | 'desc')} 
              className="px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base sm:col-span-2 lg:col-span-1"
            >
              <option value="desc">📅 Newest First</option>
              <option value="asc">📅 Oldest First</option>
            </select>
          </div>
          
          {/* Resources Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            {filteredResources.length === 0 ? (
              <div className="col-span-full text-center py-8 sm:py-12">
                <div className="text-4xl sm:text-6xl mb-4">📭</div>
                <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">No resources found</p>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                  {search ? 'Try adjusting your search terms' : 'Upload your first resource to get started'}
                </p>
              </div>
            ) : (
              filteredResources.map(r => (
                <div key={r.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <span className="text-xl sm:text-2xl flex-shrink-0">{AVATAR_ICON[r.uploaderType as 'admin' | 'public']}</span>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">
                          {r.uploaderType === 'admin' ? (r.uploadedBy?.username || 'Admin') : 'General Public'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(r.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 flex-shrink-0">
                      {STATUS_BADGE(r.active)}
                      {PUBLIC_BADGE(r.public)}
                    </div>
                  </div>
                  
                  {/* Resource Link */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <span className="text-xl sm:text-2xl flex-shrink-0">
                      {r.type === 'file' ? getFileIcon(r.filename || undefined) : '🔗'}
                    </span>
                    <div className="flex-1 min-w-0">
                      {r.type === 'file' ? (
                        <a 
                          href={r.url || undefined} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium truncate block text-sm sm:text-base"
                        >
                          {r.filename || r.url}
                        </a>
                      ) : (
                        <a 
                          href={r.url || undefined} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium truncate block text-sm sm:text-base"
                        >
                          {r.url}
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={r.active} 
                          onChange={e => toggleResource(r.id, 'active', e.target.checked)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Active</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={r.public} 
                          onChange={e => toggleResource(r.id, 'public', e.target.checked)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Public</span>
                      </label>
                    </div>
                    <button 
                      onClick={() => handleDelete(r.id)} 
                      className="inline-flex items-center px-3 py-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors self-start sm:self-auto"
                    >
                      <span className="mr-1">🗑️</span>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 