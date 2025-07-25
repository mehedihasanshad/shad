"use client";

import { useState, useEffect } from "react";
import { X, Upload, Image as ImageIcon } from "lucide-react";
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
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTitle(resource.title || "");
      setDescription(resource.description || "");
      setThumbnail(resource.thumbnail || "");
      setUrl(resource.url || "");
      setFilename(resource.filename || "");
      setActive(resource.active);
      setIsPublic(resource.public);
      setThumbnailFile(null);
      setThumbnailPreview(null);
    }
  }, [resource, isOpen]);

  const handleThumbnailFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadThumbnailToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'thumbnails'); // You'll need to create this preset in Cloudinary
    
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Failed to upload thumbnail');
    }
    
    const data = await response.json();
    return data.secure_url;
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      let finalThumbnail = thumbnail;
      
      // Upload thumbnail file if selected
      if (thumbnailFile) {
        try {
          finalThumbnail = await uploadThumbnailToCloudinary(thumbnailFile);
        } catch (error) {
          console.error('Thumbnail upload failed:', error);
          // Continue with the save even if thumbnail upload fails
        }
      }

      const response = await fetch(`/api/resources/${resource.id}/edit`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${jwt}`,
          'Content-Type': 'application/json',
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

      if (!response.ok) {
        throw new Error('Failed to update resource');
      }

      const data = await response.json();
      onSave(data.resource);
      onClose();
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save changes. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
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

        {/* Modal Content */}
        <div className="p-4 max-h-[70vh] overflow-auto space-y-4">
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
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter resource title"
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
              rows={3}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter resource description"
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
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com"
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
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="filename.ext"
              />
            </div>
          )}

          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Thumbnail
            </label>
            
            {/* Current thumbnail or preview */}
            {(thumbnailPreview || thumbnail) && (
              <div className="mb-3">
                <img 
                  src={thumbnailPreview || thumbnail} 
                  alt="Thumbnail preview" 
                  className="w-32 h-24 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                />
              </div>
            )}

            {/* Thumbnail URL input */}
            <input
              type="url"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
              placeholder="https://example.com/thumbnail.jpg"
            />

            {/* File upload for thumbnail */}
            <div className="flex items-center gap-2">
              <label htmlFor="thumbnail-file" className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Upload className="w-4 h-4" />
                <span className="text-sm">Upload Image</span>
                <input
                  id="thumbnail-file"
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailFileChange}
                  className="sr-only"
                />
              </label>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Or enter URL above
              </span>
            </div>
          </div>

          {/* Status toggles */}
          <div className="flex gap-6">
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
            disabled={saving}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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
      </div>
    </div>
  );
}