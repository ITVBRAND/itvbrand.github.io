import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import dataCase from './dataCase.js';

const Cases = () => {
    const filteredCases = dataCase.filter(caseItem => caseItem.index).slice(0, 5);

    return (
        <section className="section section__caces">
            <article className="section__article section__article-case">
                <h2 className="article__title">
                    Кейсы
                </h2>
                <p className="article__text">
                    Упакуем ваш бизнес так, чтобы у клиентов текли слюни, а у конкурентов - слезы.
                </p>
            </article>
            <div className="case__list">
                {filteredCases.map(caseItem => (
                    <div key={caseItem.id} className={`case__item case__item-${caseItem.id}`}>
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
        </section>
    );
};

export default Cases;