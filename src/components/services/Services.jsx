import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import servicesList from './servicesList';

const Services = () => {
    const [activeService, setActiveService] = useState(servicesList[0]); // Устанавливаем первую услугу активной по умолчанию

    const handleServiceClick = (service) => {
        setActiveService(service);
    };

    return (
        <section className="section section__services">
            <article className="section__article">
                <h2 className="article__title">
                    Услуги
                </h2>
                <p className="article__text">
                    Мы не следуем трендам, мы их формируем.
                    Именно мы решаем на что люди завтра потратят свои деньги.
                </p>
            </article>
            <div className="services__wrap">
                <div className="services__list">
                    {servicesList.map(service => (
                        <div
                            key={service.id}
                            className={`services__item ${activeService.id === service.id ? 'active' : ''}`}
                            onClick={() => handleServiceClick(service)}
                        >
                            <p className='services__item-text'>
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="services__info">
                    <article className="services__article">
                        <h3 className="serives__title">
                            {activeService.title}
                        </h3>
                        <p className="services__text">
                            {activeService.description}
                        </p>
                        <div className="services__article-wrap">
                            <button className="btn-alternative">
                                Оставить заявку
                            </button>
                            <Link className='services__link' to={activeService.link}>
                                Подробнее
                            </Link>
                        </div>
                    </article>
                    <div className="services__info-img">
                        <img src={activeService.img} alt="servicesimg" className="serivces__info-picture" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;