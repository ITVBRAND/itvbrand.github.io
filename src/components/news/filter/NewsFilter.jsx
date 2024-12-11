import React from 'react';
import './style.css';

const NewsFilter = ({ activeCategory, onCategoryChange }) => {
  const categories = ['Актуальные', 'Медиа', 'Дизайн'];

  return (
    <div className="news__categor news__list-categories">
      {categories.map(category => (
        <button
          key={category}
          className={`news__categories-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default NewsFilter;