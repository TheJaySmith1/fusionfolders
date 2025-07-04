import React from 'react';

const CategorySection = ({ title, items, category }) => {
  return (
    <section className="category-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="category-grid">
        {items.map(item => (
          <div key={item.id} className="category-item">
            <div className="item-image">
              <img src={item.backgroundImageURL} alt={item.name} />
            </div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <span className="item-category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;