"use client";

import { useState, useEffect } from "react";
import { X, Upload, Image as ImageIcon } from "lucide-react";

interface Resource {
  id: number;
  type: string;
  url: string | null;
  filename: string | null;
  title: string | null;
  description: string | null;
  thumbnail: string | null;
  active: boolean;
  public: boolean;
  uploaderType: string;
  uploadedBy?: { username: string } | null;
  createdAt: Date;
}

interface ResourceEditModalProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedResource: Resource) => void;
  jwt: string;
}

export function ResourceEditModal({ resource, isOpen, onClose, onSave, jwt }: ResourceEditModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [active, setActive] = useState(true);
  const [isPublic, setIsPublic] = useState(false);
  const [saving, setSaving] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  useEffect(() => {
    if (resource && isOpen) {
      setTitle(resource.title || "");
      setDescription(resource.description || "");
      setUrl(resource.url || "");
      setThumbnail(resource.thumbnail || "");
      setActive(resource.active);
      setIsPublic(resource.public);
      setThumbnailPreview(resource.thumbnail || "");
    }
  }, [resource, isOpen]);

  const handleThumbnailFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setThumbnailFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setThumbnailPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image file for thumbnail');
      }
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
    
    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resource) return;

    setSaving(true);
    try {
      let finalThumbnail = thumbnail;
      
      // Upload thumbnail file if selected
      if (thumbnailFile) {
        try {
          finalThumbnail = await uploadThumbnailToCloudinary(thumbnailFile);
        } catch (error) {
          console.error('Thumbnail upload failed:', error);
          // Continue with the form submission even if thumbnail upload fails
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
          url: url || null,
          thumbnail: finalThumbnail || null,
          active,
          public: isPublic,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        onSave(data.resource);
        onClose();
        resetForm();
      } else {
        alert(data.error || 'Failed to update resource');
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update resource');
    } finally {
      setSaving(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setUrl("");
    setThumbnail("");
    setActive(true);
    setIsPublic(false);
    setThumbnailFile(null);
    setThumbnailPreview("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen || !resource) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Edit Resource
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Basic Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  id="edit-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter title"
                />
              </div>
              
              <div>
                <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <input
                  id="edit-description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter description"
                />
              </div>
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
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com"
                />
              </div>
            )}
          </div>

          {/* Thumbnail Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Thumbnail</h3>
            
            {/* Current Thumbnail Preview */}
            {thumbnailPreview && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current thumbnail:</p>
                <img 
                  src={thumbnailPreview} 
                  alt="Thumbnail preview" 
                  className="w-32 h-24 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
                />
              </div>
            )}

            {/* Thumbnail URL Input */}
            <div>
              <label htmlFor="edit-thumbnail-url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Thumbnail URL
              </label>
              <input
                id="edit-thumbnail-url"
                type="url"
                value={thumbnail}
                onChange={(e) => {
                  setThumbnail(e.target.value);
                  setThumbnailPreview(e.target.value);
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* OR Divider */}
            <div className="flex items-center">
              <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
              <span className="px-3 text-sm text-gray-500 dark:text-gray-400">OR</span>
              <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            </div>

            {/* Thumbnail File Upload */}
            <div>
              <label htmlFor="edit-thumbnail-file" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Upload Thumbnail Image
              </label>
              <div className="flex items-center space-x-3">
                <input
                  id="edit-thumbnail-file"
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="edit-thumbnail-file"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Choose Image
                </label>
                {thumbnailFile && (
                  <span className="text-sm text-green-600 dark:text-green-400">
                    {thumbnailFile.name}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Supported formats: JPG, PNG, GIF, WebP (max 5MB)
              </p>
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Settings</h3>
            
            <div className="flex flex-wrap gap-6">
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
        </form>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
            disabled={saving}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
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