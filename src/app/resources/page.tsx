"use client";
import { useEffect, useState } from "react";
import type { Resource } from "@prisma/client";

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
  const [resources, setResources] = useState<ResourceWithUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    fetch("/api/resources")
      .then(res => res.json())
      .then(data => {
        setResources(data.resources || []);
        setLoading(false);
      });
  }, []);

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
          {/* Search and Filter */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                <option value="all">All Resources</option>
                <option value="file">📁 Files Only</option>
                <option value="link">🔗 Links Only</option>
              </select>
            </div>
            
            {filteredResources.length > 0 && (
              <div className="mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                Showing {filteredResources.length} of {resources.length} resources
              </div>
            )}
          </div>

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
                  <div key={r.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-200 hover:scale-105">
                    {/* Resource Icon and Type */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 sm:mb-4 mx-auto">
                      <span className="text-lg sm:text-2xl">
                        {r.type === 'file' ? getFileIcon(typeof r.filename === 'string' ? r.filename : undefined) : '🔗'}
                      </span>
                    </div>
                    
                    {/* Resource Title */}
                    <div className="text-center mb-3 sm:mb-4">
                      <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full mb-2">
                        {r.type === 'file' ? 'File' : 'Link'}
                      </span>
                      
                      {r.type === 'file' ? (
                        <a 
                          href={r.url || undefined} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block text-blue-600 dark:text-blue-400 hover:underline font-medium text-center break-words text-sm sm:text-base"
                        >
                          {r.filename || r.url}
                        </a>
                      ) : (
                        <a 
                          href={r.url || undefined} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block text-blue-600 dark:text-blue-400 hover:underline font-medium text-center break-words text-sm sm:text-base"
                        >
                          {r.url}
                        </a>
                      )}
                    </div>
                    
                    {/* Resource Info */}
                    <div className="text-center text-xs text-gray-500 dark:text-gray-400 space-y-1">
                      <p>
                        Shared by {r.uploaderType === 'admin' ? (r.uploadedBy?.username || 'Admin') : 'General Public'}
                      </p>
                      <p>{new Date(r.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Upload Link */}
          <div className="text-center mt-6 sm:mt-8">
            <a 
              href="/resources/upload" 
              className="inline-flex items-center px-4 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
            >
              <span className="mr-2">📤</span>
              Share Your Own Resource
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 