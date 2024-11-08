import React from 'react';
import './style.css';
import List from './List';

const Client = () => {

    return (
        <section className="section section__clients" id='clients'>
            <article className="section__article">
                <h2 className="article__title">
                    Наши клиенты
                </h2>
                <p className="article__text">
                    У нас много опыта работы в сфере производства, но также есть и клиенты
                    из телекоммуникационной сферы, торговые компании, салоны, магазины, рестораны, частные специалисты:
                </p>
            </article>
            <div className="clients__wrap">
                <div className="clients__shadow clients__shadow-left"></div>
                <div className="clients__shadow clients__shadow-right"></div>
                <List/>
            </div>
        </section>
    );
};

export default Client;