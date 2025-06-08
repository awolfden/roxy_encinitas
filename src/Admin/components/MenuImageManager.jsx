import React, { useState, useRef, useEffect } from 'react';

const MenuImageManager = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [currentMenuImages, setCurrentMenuImages] = useState({});
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef(null);

  // Menu sections - now with separate Desserts and Drinks
  const menuSections = [
    { id: 'specials', name: 'Specials' },
    { id: 'dinner', name: 'Dinner' },
    { id: 'brunch', name: 'Brunch' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
  ];

  // Load current menu images on component mount
  useEffect(() => {
    loadCurrentMenuImages();
  }, []);

  const loadCurrentMenuImages = async () => {
    try {
      const isDevelopment = process.env.NODE_ENV === 'development';
      const apiUrl = isDevelopment 
        ? 'http://localhost:8888/.netlify/functions/menu-images'
        : '/.netlify/functions/menu-images';
      
      const response = await fetch(apiUrl);
      const result = await response.json();
      
      if (result.success) {
        setCurrentMenuImages(result.data);
      }
    } catch (error) {
      console.error('Failed to load current menu images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files) => {
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImages(prev => [...prev, {
            id: Date.now() + Math.random(),
            name: file.name,
            preview: e.target.result,
            file: file
          }]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFileInput = (e) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const uploadToCloudinary = async (file) => {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      throw new Error('Cloudinary configuration missing. Please check your environment variables.');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', 'menu_images');

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload to Cloudinary');
    }

    return await response.json();
  };

  const uploadImage = async (imageData, sectionId, sectionName) => {
    setUploading(true);
    try {
      // Upload to Cloudinary
      const cloudinaryResult = await uploadToCloudinary(imageData.file);
      
      // Update our backend with the new image URL
      const isDevelopment = process.env.NODE_ENV === 'development';
      const apiUrl = isDevelopment 
        ? 'http://localhost:8888/.netlify/functions/menu-images'
        : '/.netlify/functions/menu-images';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section: sectionId,
          imageUrl: cloudinaryResult.secure_url,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        // Update local state
        setCurrentMenuImages(prev => ({
          ...prev,
          [sectionId]: result.data
        }));
        
        // Remove from uploaded images
        removeImage(imageData.id);
        
        alert(`Successfully uploaded ${imageData.name} to ${sectionName} section!`);
      } else {
        throw new Error(result.error || 'Failed to update menu image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (imageId) => {
    setUploadedImages(prev => prev.filter(img => img.id !== imageId));
  };

  const viewCurrentImage = (section) => {
    const menuData = currentMenuImages[section.id];
    if (menuData?.imageUrl) {
      window.open(menuData.imageUrl, '_blank');
    } else {
      alert(`No image currently set for ${section.name} section`);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p>Loading menu images...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px' }}>
      <h2 style={{ color: '#6B5B73', marginBottom: '30px' }}>Menu Image Management</h2>
      
      {/* Upload Area */}
      <div
        style={{
          border: `2px dashed ${dragActive ? '#9CAF88' : '#E8DDD4'}`,
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
          backgroundColor: dragActive ? '#F9FDF7' : '#FBF9F6',
          marginBottom: '30px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          style={{ display: 'none' }}
        />
        
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>📸</div>
        <h3 style={{ color: '#6B5B73', marginBottom: '10px' }}>
          {dragActive ? 'Drop images here' : 'Upload Menu Images'}
        </h3>
        <p style={{ color: '#8B6F47', margin: 0 }}>
          Drag and drop images here, or click to select files
        </p>
        <p style={{ color: '#999', fontSize: '14px', marginTop: '10px' }}>
          Supports JPG, PNG, WebP files
        </p>
      </div>

      {/* Uploaded Images Preview */}
      {uploadedImages.length > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#6B5B73', marginBottom: '20px' }}>Ready to Upload</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {uploadedImages.map((image) => (
              <div key={image.id} style={{
                border: '1px solid #E8DDD4',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'white'
              }}>
                <img 
                  src={image.preview} 
                  alt={image.name}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover' 
                  }}
                />
                <div style={{ padding: '15px' }}>
                  <p style={{ margin: '0 0 15px 0', fontWeight: 'bold', color: '#6B5B73' }}>
                    {image.name}
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {menuSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => uploadImage(image, section.id, section.name)}
                        disabled={uploading}
                        style={{
                          backgroundColor: '#9CAF88',
                          color: 'white',
                          border: 'none',
                          padding: '8px 12px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          cursor: uploading ? 'not-allowed' : 'pointer',
                          opacity: uploading ? 0.6 : 1
                        }}
                      >
                        → {section.name}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => removeImage(image.id)}
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Current Menu Sections */}
      <div>
        <h3 style={{ color: '#6B5B73', marginBottom: '20px' }}>Current Menu Sections</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {menuSections.map((section) => {
            const menuData = currentMenuImages[section.id];
            const hasImage = menuData?.imageUrl;
            
            return (
              <div key={section.id} style={{
                border: '1px solid #E8DDD4',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: 'white'
              }}>
                <h4 style={{ color: '#6B5B73', margin: '0 0 10px 0' }}>{section.name}</h4>
                
                {hasImage ? (
                  <div>
                    <p style={{ color: '#8B6F47', fontSize: '14px', margin: '0 0 10px 0' }}>
                      ✅ Image active
                    </p>
                    <p style={{ color: '#999', fontSize: '12px', margin: '0 0 15px 0' }}>
                      Updated: {new Date(menuData.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                ) : (
                  <p style={{ color: '#999', fontSize: '14px', margin: '0 0 15px 0' }}>
                    No image set
                  </p>
                )}
                
                <button 
                  onClick={() => viewCurrentImage(section)}
                  style={{
                    backgroundColor: hasImage ? '#9CAF88' : '#F0E8DA',
                    color: hasImage ? 'white' : '#6B5B73',
                    border: hasImage ? 'none' : '1px solid #E8DDD4',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  {hasImage ? 'View Current' : 'No Image'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {uploading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '15px' }}>⏳</div>
            <p>Uploading to Cloudinary...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuImageManager; 