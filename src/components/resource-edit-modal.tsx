"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import type { Resource } from "@prisma/client";

interface ResourceWithUploader extends Resource {
  uploadedBy?: { username: string } | null;
  uploaderType: string;
}

interface ResourceEditModalProps {
  resource: ResourceWithUploader | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    title: string;
    description: string;
    thumbnail: string;
    url?: string;
  }) => Promise<void>;
}

export function ResourceEditModal({ resource, isOpen, onClose, onSave }: ResourceEditModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [url, setUrl] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (resource && isOpen) {
      setTitle(resource.title || '');
      setDescription(resource.description || '');
      setThumbnail(resource.thumbnail || '');
      setUrl(resource.url || '');
    }
  }, [resource, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resource) return;

    setSaving(true);
    try {
      await onSave({
        title,
        description,
        thumbnail,
        ...(resource.type === 'link' ? { url } : {}),
      });
      onClose();
    } catch (error) {
      console.error('Save error:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setThumbnail('');
    setUrl('');
    onClose();
  };

  if (!isOpen || !resource) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Resource
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {resource.type === 'file' ? 'File' : 'Link'} • 
              {resource.filename || 'Resource'}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input
              id="edit-title"
              type="text"
              placeholder="Enter title (optional)"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="edit-description"
              placeholder="Enter description (optional)"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* URL (for links only) */}
          {resource.type === 'link' && (
            <div>
              <label htmlFor="edit-url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                URL
              </label>
              <input
                id="edit-url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={e => setUrl(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          {/* Thumbnail */}
          <div>
            <label htmlFor="edit-thumbnail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Thumbnail URL
            </label>
            <input
              id="edit-thumbnail"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={thumbnail}
              onChange={e => setThumbnail(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Add a preview image URL for this resource
            </p>
            
            {/* Thumbnail Preview */}
            {thumbnail && (
              <div className="mt-2">
                <img 
                  src={thumbnail} 
                  alt="Thumbnail preview" 
                  className="w-32 h-20 object-cover rounded border"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={handleClose}
              disabled={saving}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}