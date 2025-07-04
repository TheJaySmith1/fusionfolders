import React, { useState, useEffect } from 'react';

const PreviewModal = ({ isOpen, onClose, item, allData }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  // Get all items from the same category as the selected item
  const categoryItems = allData.filter(dataItem => dataItem.category === item.category);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCopyUrl = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handleImageClick = (clickedItem) => {
    setSelectedImage(clickedItem);
  };

  const closeImageView = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title-section">
              <h2 className="modal-title">
                {item.category} Collection
              </h2>
              <p className="modal-subtitle">
                {categoryItems.length} item{categoryItems.length !== 1 ? 's' : ''} in this collection
              </p>
            </div>
            <button className="modal-close-btn" onClick={onClose}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </button>
          </div>
          
          <div className="modal-body">
            <div className="preview-grid">
              {categoryItems.map((previewItem) => (
                <div key={previewItem.id} className="preview-item">
                  <div className="preview-image-container" onClick={() => handleImageClick(previewItem)}>
                    <img 
                      src={previewItem.backgroundImageURL} 
                      alt={previewItem.name}
                      className="preview-image"
                      loading="lazy"
                    />
                    <div className="preview-overlay">
                      <h4 className="preview-title">{previewItem.name}</h4>
                      <div className="preview-actions">
                        <button 
                          className="preview-action-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyUrl(previewItem.backgroundImageURL);
                          }}
                        >
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                          </svg>
                        </button>
                        <button 
                          className="preview-action-btn view-full-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageClick(previewItem);
                          }}
                        >
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Image View Modal */}
      {selectedImage && (
        <div className="full-image-backdrop" onClick={closeImageView}>
          <div className="full-image-modal">
            <div className="full-image-header">
              <h3 className="full-image-title">{selectedImage.name}</h3>
              <button className="full-image-close" onClick={closeImageView}>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
              </button>
            </div>
            <div className="full-image-container">
              <img 
                src={selectedImage.backgroundImageURL} 
                alt={selectedImage.name}
                className="full-image"
              />
            </div>
            <div className="full-image-actions">
              <button 
                className="full-image-action-btn"
                onClick={() => handleCopyUrl(selectedImage.backgroundImageURL)}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                Copy Image URL
              </button>
              <a 
                href={selectedImage.backgroundImageURL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="full-image-action-btn"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                  <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                Open Original
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewModal;