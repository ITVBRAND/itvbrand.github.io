import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import HeaderHero from '../header/HeaderHero';
import dataCase from './dataCase.js';

const Caselist = () => {

    return (
        <section className="section section__case-list">
            <HeaderHero />
            <article className="section__article section__article-case">
                <h1 className="article__title section__title">
                    Кейсы
                </h1>
                <p className="article__text">
                    Упакуем ваш бизнес так, чтобы у клиентов текли слюни, а у конкурентов - слезы.
                </p>
            </article>
            <div className="case__block">
                <div className="case__list-pages">
                    {dataCase.map(caseItem => (
                        <div key={caseItem.id} className={`case__item case__item-pages case__item-${caseItem.id}`}>
                            <Link className='case__link' to={caseItem.link}>
                                <img className="case__item-img" src={caseItem.img} alt="case" />
                                <div className="case__item-article">
                                    <h3 className="case__item-title">
                                        {caseItem.title}
                                    </h3>
                                    <p className="case__item-text">
                                        {caseItem.description}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Caselist;
