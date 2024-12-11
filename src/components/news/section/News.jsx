import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase';

import './style.css';
import NewsFilter from '../filter/NewsFilter';
import NewsListItem from '../list/NewsListItem';

const News = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Актуальные');

  useEffect(() => {
    const fetchNews = async () => {
      const newsCollection = collection(db, 'news');
      const newsQuery = query(newsCollection, orderBy('date', 'desc'));
      const newsSnapshot = await getDocs(newsQuery);
      const newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNews(newsList);
      setFilteredNews(newsList);
    };

    fetchNews();
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'Актуальные') {
      setFilteredNews(news);
    } else {
      setFilteredNews(news.filter(item => item.category === category));
    }
  };

  const getLimitedNews = () => {
    const isMobile = window.innerWidth <= 768;
    const limit = isMobile ? 1 : 2;
    return filteredNews.slice(0, limit);
  };

  return (
    <section className="section section__news">
      <article className="section__article">
        <h2 className="article__title">
          Медиа
        </h2>
        <p className="article__text">
          Про маркетинг, рекламу и современные технологии в бизнесе.
        </p>
      </article>
      <div className="news__wrap">
        <NewsFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        <div className="news__list">
          {getLimitedNews().map(newsItem => (
            <NewsListItem key={newsItem.id} newsItem={newsItem} />
          ))}
        </div>
        <div className="news__more">
          <Link className='btn btn-default' to="/news">
            Смотреть все статьи
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;