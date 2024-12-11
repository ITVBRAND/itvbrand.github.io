import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

import '../styles/styles.css';
import '../components/news/style.css';
import Footer from '../components/footer/Footer';
import HeaderStatic from '../components/header/HeaderStatic';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      const newsDoc = doc(db, 'news', id);
      const newsSnapshot = await getDoc(newsDoc);
      if (newsSnapshot.exists()) {
        setNewsItem(newsSnapshot.data());
      }
    };

    fetchNewsItem();
  }, [id]);

  if (!newsItem) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="padding">
      <div className="section section__news-detail">
        <HeaderStatic />
        <div className="section__news-container">
          <h2 className="news-detail__title">{newsItem.title}</h2>
          <p className="news-detail__author">Автор: {newsItem.author}</p>
          <p className="news-detail__date">Дата публикации: {newsItem.date}</p>
          {newsItem.video ? (
            <div className="news__detail-video" dangerouslySetInnerHTML={{ __html: newsItem.video }} />
          ) : (
            <img src={newsItem.image} alt={newsItem.title} className="news__detail-picture" />
          )}
          <div className="news-detail__content" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;