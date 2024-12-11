import React from 'react';

import './style.css';

import HeaderStatic from '../../components/header/HeaderHero';
import HeaderFixed from '../../components/header/HeaderFixed';
import Footer from '../../components/footer/Footer';

const Service = () => (
    <div className='padding'>
        <HeaderFixed />
        <div className="section section__service-overlay">
            <HeaderStatic />
            <div className="section__service-header">
                <h1>
                    Разработка
                </h1>
                <p>
                    Разрабатываем: сайты, веб-приложения. Занимаемся внидрением и интеграцией CRM и других систем. Используем лучшие практики в технических решениях.
                </p>
            </div>
            <section className="service__block">
                <article>
                    <h3>
                        Лендинги
                    </h3>
                    <p>Разработаем продающий или яркий лендинг для вашего бизнаса.</p>
                </article>
                <article>
                    <h3>
                        Корпоративные порталы
                    </h3>
                    <p>Крупные порталы для больших организации. Новостные ленты, Каталог с предложениями, и.тд.</p>
                </article>
                <article>
                    <h3>
                        Интернет-магазины
                    </h3>
                    <p>Разработка маркетплейсов, интернет-магазинов интеграции с различными системами складского учета и crm систем.</p>
                </article>
                <article>
                    <h3>
                        Уникальные решения
                    </h3>
                    <p>
                        Разработка сайта или веб-приложения исходя из требований клиента.
                    </p>
                </article>
            </section>
            <section className="service__block">
                <h2>Этапы</h2>
                <h3>1. </h3>
            </section>
            <section className="service__block">
                <h2>Сроки реализации</h2>
            </section>
            <section className="service__block">
                <h2>Результат</h2>
            </section>
            <Footer />
        </div>
    </div>
);

export default Service;