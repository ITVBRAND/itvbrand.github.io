import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase';

import './style.css';

import NewsFilter from '../filter/NewsFilter';
import NewsListItem from './NewsListItem';

const NewsList = () => {
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

  return (
    <div className="news__list-wrap">
      <div className="news__list-header">
        <h2 className="news__list-title">
          Последние статьи
        </h2>
        <NewsFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      </div>

      <div className="news__page-list">
        {filteredNews.map(newsItem => (
          <NewsListItem key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;