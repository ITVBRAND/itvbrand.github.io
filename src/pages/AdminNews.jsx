import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import '../styles/admin.css';

import Footer from '../components/footer/Footer';
import HeaderStatic from '../components/header/HeaderStatic';

const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [video, setVideo] = useState('');
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNewsId, setCurrentNewsId] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollection = collection(db, 'news');
        const newsSnapshot = await getDocs(newsCollection);
        const newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNews(newsList);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Ошибка при загрузке новостей");
      }
    };

    fetchNews();
  }, []);

  const handleAddNews = async () => {
    try {
      const newNews = {
        title,
        description,
        date,
        content,
        image,
        author,
        category,
        video
      };

      const newsCollection = collection(db, 'news');
      const docRef = await addDoc(newsCollection, newNews);
      setNews([...news, { id: docRef.id, ...newNews }]);

      // Очистка полей формы
      setTitle('');
      setDescription('');
      setDate('');
      setContent('');
      setImage('');
      setAuthor('');
      setCategory('');
      setVideo('');
    } catch (error) {
      console.error("Error adding news:", error);
      setError("Ошибка при добавлении новости");
    }
  };

  const handleDeleteNews = async (id) => {
    try {
      const newsDoc = doc(db, 'news', id);
      await deleteDoc(newsDoc);
      setNews(news.filter(newsItem => newsItem.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
      setError("Ошибка при удалении новости");
    }
  };

  const handleEditNews = (newsItem) => {
    setIsEditing(true);
    setCurrentNewsId(newsItem.id);
    setTitle(newsItem.title);
    setDescription(newsItem.description);
    setDate(newsItem.date);
    setContent(newsItem.content);
    setImage(newsItem.image);
    setAuthor(newsItem.author);
    setCategory(newsItem.category);
    setVideo(newsItem.video);
  };

  const handleUpdateNews = async () => {
    try {
      const updatedNews = {
        title,
        description,
        date,
        content,
        image,
        author,
        category,
        video
      };

      const newsDoc = doc(db, 'news', currentNewsId);
      await updateDoc(newsDoc, updatedNews);

      setNews(news.map(newsItem => (newsItem.id === currentNewsId ? { id: currentNewsId, ...updatedNews } : newsItem)));

      // Очистка полей формы
      setTitle('');
      setDescription('');
      setDate('');
      setContent('');
      setImage('');
      setAuthor('');
      setCategory('');
      setVideo('');
      setIsEditing(false);
      setCurrentNewsId(null);
    } catch (error) {
      console.error("Error updating news:", error);
      setError("Ошибка при обновлении новости");
    }
  };

  return (
    <div className='padding'>
      <div className="section section__news-admin">
        <HeaderStatic />
        <h2>Страница публикаций Новостей</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='section__news-list section__news-item'>
          <h3>{isEditing ? 'Редактировать новость' : 'Создать новость'}</h3>
          <input
            className='section__news-admin__input'
            type="text"
            placeholder="Краткое описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className='section__news-admin__input'
            type="date"
            placeholder="Дата публикации"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={{
              toolbar: [
                [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
                [{ 'size': [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, 
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image', 'video'],
                ['clean']
              ],
            }}
            formats={[
              'header', 'font', 'size',
              'bold', 'italic', 'underline', 'strike', 'blockquote',
              'list', 'bullet', 'indent',
              'link', 'image', 'video'
            ]}
            placeholder="Полная статья"
          />
          <input
            className='section__news-admin__input'
            type="text"
            placeholder="Изображение статьи (URL)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            className='section__news-admin__input'
            type="text"
            placeholder="Кто опубликовал"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            className='section__news-admin__input'
            type="text"
            placeholder="Категория"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className='section__news-admin__input'
            type="text"
            placeholder="Видео (iframe URL)"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
          <button onClick={isEditing ? handleUpdateNews : handleAddNews}>
            {isEditing ? 'Обновить новость' : 'Добавить новость'}
          </button>
          {isEditing && (
            <button onClick={() => {
              setIsEditing(false);
              setCurrentNewsId(null);
              setTitle('');
              setDescription('');
              setDate('');
              setContent('');
              setImage('');
              setAuthor('');
              setCategory('');
              setVideo('');
            }}>
              Отменить
            </button>
          )}
        </div>
        <div>
          <h3>Список новостей</h3>
          <div className='section__news-list'>
            {news.map(newsItem => (
              <div className='section__news-item' key={newsItem.id}>
                <h4>{newsItem.title}</h4>
                <p>{newsItem.description}</p>
                <p>{newsItem.date}</p>
                <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                <img src={newsItem.image} alt={newsItem.title} width="100" />
                <p>{newsItem.author}</p>
                <p>{newsItem.category}</p>
                {newsItem.video && (
                  <div className="section__news-item__video" dangerouslySetInnerHTML={{ __html: newsItem.video }} />
                )}
                <div className="section__news-item__wrap">
                  <button onClick={() => handleEditNews(newsItem)}>Редактировать</button>
                  <button onClick={() => handleDeleteNews(newsItem.id)}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminNews;