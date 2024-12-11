import React  from 'react';

import './style.css';

import HeaderStatic from '../header/HeaderStatic';
import NewsBanner from './banner/NewsBanner';
import NewsList from './list/NewsList';

const NewsHero = () => {  

    return (
        <section className="section news__page">
            <HeaderStatic />
            <div className="section__header">
                <article className="news__page-article">
                    <h2 className='news__page-title'>Новости</h2>
                    <p>
                        Некая информация о новостной странице, возможно, что текста и не должно быть.
                    </p>
                </article>
            </div>
            <NewsBanner />
            <NewsList />
        </section>
    );
};

export default NewsHero;