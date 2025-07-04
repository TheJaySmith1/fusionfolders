import React, { useState } from 'react';

const ImageCard = ({ item, onPreview, onCopyUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Genres':
        return '🎬';
      case 'Streaming':
        return '📺';
      case 'Live TV':
        return '📡';
      case 'Collections':
        return '📚';
      case 'Users':
        return '👤';
      default:
        return '🔍';
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(item.backgroundImageURL);
      onCopyUrl && onCopyUrl(item.backgroundImageURL);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handlePreview = () => {
    onPreview && onPreview(item);
  };

  return (
    <div className="image-card">
      <div className="card-image-container">
        {!imageLoaded && (
          <div className="image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
        
        {!imageError ? (
          <img
            src={item.backgroundImageURL}
            alt={item.name}
            className={`card-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="image-fallback" style={{ backgroundColor: item.backgroundColor || '#333' }}>
            <span className="fallback-text">{item.name}</span>
          </div>
        )}
        
        <div className="card-overlay">
          <div className="card-content">
            <div className="card-category">
              <span className="category-icon">{getCategoryIcon(item.category)}</span>
              <span className="category-text">{item.category}</span>
            </div>
            <h3 className="card-title" style={{ color: item.textColor || '#FFFFFF' }}>
              {item.name}
            </h3>
          </div>
          <div className="card-actions">
            <button className="action-btn view-btn" onClick={handlePreview}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
              Preview
            </button>
            <button className="action-btn copy-btn" onClick={handleCopyUrl}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
              </svg>
              Copy URL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;