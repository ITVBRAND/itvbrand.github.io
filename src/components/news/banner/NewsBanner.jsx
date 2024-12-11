import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Link } from 'react-router-dom';
import './style.css';

const NewsBanner = () => {
  const [latestNews, setLatestNews] = useState(null);

  useEffect(() => {
    const fetchLatestNews = async () => {
      const newsCollection = collection(db, 'news');
      const latestNewsQuery = query(newsCollection, orderBy('date', 'desc'), limit(1));
      const newsSnapshot = await getDocs(latestNewsQuery);
      const newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLatestNews(newsList[0]);
    };

    fetchLatestNews();
  }, []);

  if (!latestNews) {
    return <div>Загрузка...</div>;
  }

  return (
    <Link to={`/news/${latestNews.id}`} className="news__banner-link">
      <div className="news__banner">
        <img src={latestNews.image} alt={latestNews.title} className="news__banner-picture" />
        <article className="news__banner-article">
          <h3 className="news__banner-title">
            {latestNews.title}
          </h3>
          <p className="news__banner-text">
            {latestNews.description}
          </p>
        </article>
        <div className="news__banner-shadow"></div>
        <div className="news__tag-list">
          <div className="news__tag-item">
            <span className="news__tag-name">
              {latestNews.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsBanner;