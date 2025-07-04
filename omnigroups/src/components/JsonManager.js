import React, { useState } from 'react';

const JsonManager = () => {
  const [copiedUrl, setCopiedUrl] = useState('');

  const jsonFiles = [
    {
      name: 'Genre Collection',
      description: '15 movie and TV genres with themed images',
      filename: 'genre-collection.json',
      url: `${window.location.origin}/genre-collection.json`,
      category: 'Genres',
      icon: '🎬',
      count: 15
    },
    {
      name: 'Streaming Services',
      description: '8 major streaming platforms',
      filename: 'streaming-collection.json',
      url: `${window.location.origin}/streaming-collection.json`,
      category: 'Streaming',
      icon: '📺',
      count: 8
    },
    {
      name: 'Live TV Channels',
      description: 'Live TV categories (UK, US)',
      filename: 'livetv-collection.json',
      url: `${window.location.origin}/livetv-collection.json`,
      category: 'Live TV',
      icon: '📡',
      count: 2
    }
  ];

  const handleCopyUrl = async (url, filename) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(filename);
      setTimeout(() => setCopiedUrl(''), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="json-manager">
      <div className="json-manager-header">
        <h3 className="json-manager-title">📄 JSON Collections</h3>
        <p className="json-manager-description">
          Access and copy URLs for all image collection data files
        </p>
      </div>
      
      <div className="json-files-grid">
        {jsonFiles.map((file) => (
          <div key={file.filename} className="json-file-card">
            <div className="json-file-header">
              <div className="json-file-icon">{file.icon}</div>
              <div className="json-file-info">
                <h4 className="json-file-name">{file.name}</h4>
                <p className="json-file-description">{file.description}</p>
                <span className="json-file-count">{file.count} items</span>
              </div>
            </div>
            
            <div className="json-file-details">
              <div className="json-file-url">
                <span className="json-url-label">URL:</span>
                <code className="json-url-text">{file.url}</code>
              </div>
              
              <div className="json-file-actions">
                <button 
                  className={`json-action-btn copy-btn ${copiedUrl === file.filename ? 'copied' : ''}`}
                  onClick={() => handleCopyUrl(file.url, file.filename)}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    {copiedUrl === file.filename ? (
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    ) : (
                      <>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                      </>
                    )}
                  </svg>
                  {copiedUrl === file.filename ? 'Copied!' : 'Copy URL'}
                </button>
                
                <button 
                  className="json-action-btn download-btn"
                  onClick={() => handleDownload(file.url, file.filename)}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                  </svg>
                  Download
                </button>
                
                <a 
                  href={file.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="json-action-btn view-btn"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                  View JSON
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="json-manager-footer">
        <p className="json-manager-note">
          💡 <strong>Developer Tip:</strong> Use these JSON files as data sources for your own projects. 
          Each file contains structured image metadata with categories, names, and high-quality image URLs.
        </p>
      </div>
    </div>
  );
};

export default JsonManager;