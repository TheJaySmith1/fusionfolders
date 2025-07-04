import React, { useState } from 'react';
import './App.css';
import genreData from './genre-collection.json';
import streamingData from './streaming-collection.json';
import livetvData from './livetv-collection.json';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ImageCard from './components/ImageCard';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all data with additional categories
  const allData = [
    ...genreData.map(item => ({ ...item, category: 'Genres' })),
    ...streamingData.map(item => ({ ...item, category: 'Streaming' })),
    ...livetvData.map(item => ({ ...item, category: 'Live TV' })),
    // Add sample Collections and Users data
    {
      id: 'trending',
      name: 'Trending Now',
      category: 'Collections',
      backgroundImageURL: 'https://i.postimg.cc/wvKpQrRq/trending.jpg',
      textColor: '#FFFFFF',
      backgroundColor: '#FF6B6B'
    },
    {
      id: 'popular',
      name: 'Most Popular',
      category: 'Collections',
      backgroundImageURL: 'https://i.postimg.cc/GmxMN8y9/popular.jpg',
      textColor: '#FFFFFF',
      backgroundColor: '#4ECDC4'
    },
    {
      id: 'newreleases',
      name: 'New Releases',
      category: 'Collections',
      backgroundImageURL: 'https://i.postimg.cc/4NqGj3CS/new-releases.jpg',
      textColor: '#FFFFFF',
      backgroundColor: '#45B7D1'
    },
    {
      id: 'curated',
      name: 'Curated Picks',
      category: 'Collections',
      backgroundImageURL: 'https://i.postimg.cc/D0X8W8r9/curated.jpg',
      textColor: '#FFFFFF',
      backgroundColor: '#96CEB4'
    },
    {
      id: 'user1',
      name: 'TheJaySmith',
      category: 'Users',
      backgroundImageURL: 'https://i.postimg.cc/7ZQJxjRr/user-avatar-1.jpg',
      textColor: '#FFFFFF',
      backgroundColor: '#9013FE'
    },
    {
      id: 'user2',
      name: 'MovieBuff',
      category: 'Users',
      backgroundImageURL: 'https://i.postimg.cc/bNHkY3hG/user-avatar-2.jpg',
      textColor: '#FFFFFF',
      backgroundColor: '#FF5722'
    },
    {
      id: 'user3',
      name: 'StreamMaster',
      category: 'Users',
      backgroundImageURL: 'https://i.postimg.cc/GmKPqRrX/user-avatar-3.jpg',
      textColor: '#FFFFFF',
      backgroundColor: '#795548'
    }
  ];

  const categories = ['all', 'Collections', 'Streaming', 'Genres', 'Users'];

  // Filter data based on active category and search term
  const filteredData = allData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="App">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <Hero />
      
      <main className="main-content">
        <div className="container">
          {/* Category Navigation */}
          <div className="category-nav">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="results-info">
            <h2>
              {activeCategory === 'all' ? 'All Categories' : activeCategory}
              <span className="count">({filteredData.length} items)</span>
            </h2>
          </div>

          {/* Image Grid */}
          <div className="image-grid">
            {filteredData.map(item => (
              <ImageCard key={item.id} item={item} />
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="no-results">
              <h3>No results found</h3>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 OmniGroups by TheJaySmith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;