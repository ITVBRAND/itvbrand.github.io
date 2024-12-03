import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import newsList from './newsList';

import './style.css';

const News = () => {
    const [activeCategory, setActiveCategory] = useState('Последние новости');
    const [isMobile, setIsMobile] = useState(false);

    const categories = ['Последние новости', 'Подкасты', 'Статьи', 'Уроки'];

    const filteredNews = activeCategory === 'Последние новости'
        ? newsList
        : newsList.filter(news => news.category === activeCategory);

    const latestNews = filteredNews.slice(-2).reverse();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
    
        handleResize(); // Установить начальное значение
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);    

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
                <div className="news__categor">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`news__categories-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="news__list">
                    {isMobile ? latestNews.slice(-1).map(news => (
                        <Link key={news.id} className="news__item" to={news.link}>
                            <img src={news.img} className="news__img" alt="img" />
                            <article className="news__article">
                                <h3 className="news__title">
                                    {news.title}
                                </h3>
                                <p className="news__text">
                                    {news.text}
                                </p>
                            </article>
                        </Link>
                    )) : latestNews.map(news => (
                        <Link key={news.id} className="news__item" to={news.link}>
                            <img src={news.img} className="news__img" alt="img" />
                            <article className="news__article">
                                <h3 className="news__title">
                                    {news.title}
                                </h3>
                                <p className="news__text">
                                    {news.text}
                                </p>
                            </article>
                        </Link>
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