"use client";

import { useState, useEffect } from "react";
import { X, Save, Upload, Image as ImageIcon } from "lucide-react";
import type { Resource } from "@prisma/client";

interface ResourceWithUploader extends Resource {
  uploadedBy?: { username: string } | null;
  uploaderType: string;
}

interface ResourceEditModalProps {
  resource: ResourceWithUploader;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedResource: ResourceWithUploader) => void;
  jwt: string;
}

export function ResourceEditModal({ resource, isOpen, onClose, onSave, jwt }: ResourceEditModalProps) {
  const [title, setTitle] = useState(resource.title || "");
  const [description, setDescription] = useState(resource.description || "");
  const [thumbnail, setThumbnail] = useState(resource.thumbnail || "");
  const [url, setUrl] = useState(resource.url || "");
  const [filename, setFilename] = useState(resource.filename || "");
  const [active, setActive] = useState(resource.active);
  const [isPublic, setIsPublic] = useState(resource.public);
  const [saving, setSaving] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);

  // Reset form when resource changes
  useEffect(() => {
    setTitle(resource.title || "");
    setDescription(resource.description || "");
    setThumbnail(resource.thumbnail || "");
    setUrl(resource.url || "");
    setFilename(resource.filename || "");
    setActive(resource.active);
    setIsPublic(resource.public);
    setThumbnailFile(null);
  }, [resource]);

  const handleSave = async () => {
    setSaving(true);
    try {
      let finalThumbnail = thumbnail;

      // Upload thumbnail file if selected
      if (thumbnailFile) {
        setUploadingThumbnail(true);
        const formData = new FormData();
        formData.append('file', thumbnailFile);
        formData.append('folder', 'thumbnails');

        const uploadRes = await fetch('/api/resources/upload', {
          method: 'POST',
          headers: { Authorization: `Bearer ${jwt}` },
          body: formData,
        });

        const uploadData = await uploadRes.json();
        if (uploadData.success) {
          finalThumbnail = uploadData.url;
        }
        setUploadingThumbnail(false);
      }

      const response = await fetch(`/api/resources/${resource.id}/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          title: title || null,
          description: description || null,
          thumbnail: finalThumbnail || null,
          url: resource.type === 'link' ? url : resource.url,
          filename: resource.type === 'file' ? filename : resource.filename,
          active,
          public: isPublic,
        }),
      });

      const data = await response.json();
      if (data.success) {
        onSave(data.resource);
        onClose();
      } else {
        alert(data.error || 'Failed to update resource');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to update resource');
    } finally {
      setSaving(false);
    }
  };

  const handleThumbnailFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setThumbnailFile(file);
        // Create preview URL
        const previewUrl = URL.createObjectURL(file);
        setThumbnail(previewUrl);
      } else {
        alert('Please select an image file for thumbnail');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Edit Resource
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-[70vh] overflow-auto space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter resource title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter resource description"
            />
          </div>

          {/* URL (for links) */}
          {resource.type === 'link' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                URL
              </label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>
          )}

          {/* Filename (for files) */}
          {resource.type === 'file' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Filename
              </label>
              <input
                type="text"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter filename"
              />
            </div>
          )}

          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Thumbnail
            </label>
            
            {/* Current thumbnail preview */}
            {thumbnail && (
              <div className="mb-3">
                <img 
                  src={thumbnail} 
                  alt="Thumbnail preview" 
                  className="w-32 h-20 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                />
              </div>
            )}

            {/* Thumbnail URL input */}
            <input
              type="url"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
              placeholder="Enter thumbnail URL"
            />

            {/* File upload for thumbnail */}
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <ImageIcon className="w-4 h-4" />
                <span className="text-sm">Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailFileChange}
                  className="sr-only"
                />
              </label>
              {uploadingThumbnail && (
                <span className="text-sm text-blue-600 dark:text-blue-400">Uploading...</span>
              )}
            </div>
          </div>

          {/* Status toggles */}
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Active</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Public</span>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}