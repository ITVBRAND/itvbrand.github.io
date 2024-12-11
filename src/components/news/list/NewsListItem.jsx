import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const NewsListItem = ({ newsItem }) => {
  const { id, title, description, image } = newsItem;

  return (
    <Link className='news__page-item' to={`/news/${id}`}>
      <img src={image} alt={title} className="news__page-item_picture" />
      <div className="news__item-shadow"></div>
      <article className="news__page-item_article">
        <h3 className="news__title">
          {title}
        </h3>
        <p className="news__page-text">
          {description}
        </p>
      </article>
    </Link>
  );
};

export default NewsListItem;