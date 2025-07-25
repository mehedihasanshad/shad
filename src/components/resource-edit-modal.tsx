"use client";

import { useState, useEffect } from "react";
import { X, Save, Upload } from "lucide-react";
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
        formData.append('title', 'Thumbnail');
        formData.append('description', `Thumbnail for ${resource.title || resource.filename}`);

        const uploadRes = await fetch("/api/resources/upload", {
          method: "POST",
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
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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
        alert(data.error || "Failed to update resource");
      }
    } catch (error) {
      console.error("Error updating resource:", error);
      alert("Failed to update resource");
    } finally {
      setSaving(false);
    }
  };

  const handleThumbnailFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file for thumbnail');
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Thumbnail file size must be less than 5MB');
        return;
      }
      setThumbnailFile(file);
    }
  };

  if (!isOpen) return null;

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
              {resource.type === 'file' ? 'File' : 'Link'} • ID: {resource.id}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 max-h-[70vh] overflow-auto">
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              <input
                id="edit-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resource title"
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter resource description"
                rows={3}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* URL (for links) */}
            {resource.type === 'link' && (
              <div>
                <label htmlFor="edit-url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  URL
                </label>
                <input
                  id="edit-url"
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {/* Filename (for files) */}
            {resource.type === 'file' && (
              <div>
                <label htmlFor="edit-filename" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Filename
                </label>
                <input
                  id="edit-filename"
                  type="text"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  placeholder="filename.ext"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Current thumbnail:</p>
                  <img 
                    src={thumbnail} 
                    alt="Current thumbnail" 
                    className="w-32 h-20 object-cover rounded border"
                  />
                </div>
              )}

              {/* Thumbnail URL input */}
              <input
                type="url"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                placeholder="https://example.com/thumbnail.jpg"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
              />

              {/* File upload for thumbnail */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <label htmlFor="thumbnail-upload" className="cursor-pointer">
                    <span className="text-sm text-blue-600 hover:text-blue-500 font-medium">
                      Upload new thumbnail
                    </span>
                    <input
                      id="thumbnail-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailFileChange}
                      className="sr-only"
                    />
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    PNG, JPG, GIF up to 5MB
                  </p>
                  {thumbnailFile && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                      Selected: {thumbnailFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Status toggles */}
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Active</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPublic}
                  onChange={(e) => setIsPublic(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">Public</span>
              </label>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || uploadingThumbnail}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving || uploadingThumbnail ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                {uploadingThumbnail ? 'Uploading...' : 'Saving...'}
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