import React from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h1>
              <span className="logo-main">OmniGroups</span>
              <span className="logo-sub">by TheJaySmith</span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search collections, genres, streaming services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* User Menu */}
          <div className="user-menu">
            <button className="profile-btn">
              <div className="avatar">JS</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;