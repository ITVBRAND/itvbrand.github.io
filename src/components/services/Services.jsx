import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import servicesList from './servicesList';

// Подкомпонент для заголовка секции
const SectionHeader = () => (
    <article className="section__article">
        <h2 className="article__title">Услуги</h2>
        <p className="article__text">
            Мы не следуем трендам, мы их формируем.
            Именно мы решаем на что люди завтра потратят свои деньги.
        </p>
    </article>
);

// Подкомпонент для элемента аккордеона
const AccordionItem = ({ service, isActive, toggleAccordion, accordionRef }) => (
    <div className="accordion__item" ref={accordionRef}>
        <div className="accordion__title" onClick={() => toggleAccordion(service.id)}>
            <h3 className='accordion__title-title'>{service.title}</h3>
            <span className={`accordion__icon ${isActive ? 'open' : ''}`}>+</span>
        </div>
        <div className={`accordion__content ${isActive ? 'open' : ''}`} style={{ maxHeight: isActive ? '500px' : '0' }}>
            <p className="accordion__text">{service.description}</p>
            <div className="accordion__buttons">
                <button className="btn-alternative">Оставить заявку</button>
                <Link className="services__link" to={service.link}>Подробнее</Link>
            </div>
            <div className="services__info-img">
                <img src={service.img} alt="servicesimg" className="services__info-picture" />
            </div>
        </div>
    </div>
);

// Подкомпонент для информации об услуге
const ServiceInfo = ({ service }) => (
    <div className="services__info">
        <article className="services__article">
            <h3 className="services__title">{service.title}</h3>
            <p className="services__text">{service.description}</p>
            <div className="services__article-wrap">
                <button className="btn-alternative">Оставить заявку</button>
                <Link className="services__link" to={service.link}>Подробнее</Link>
            </div>
        </article>
        <div className="services__info-img">
            <img src={service.img} alt="servicesimg" className="services__info-picture" />
        </div>
    </div>
);

const Services = () => {
    const [activeService, setActiveService] = useState(servicesList[0]);
    const [activeAccordion, setActiveAccordion] = useState(null);
    
    // Создаем ref для хранения каждого пункта аккордеона
    const accordionRefs = useRef({});

    const handleServiceClick = (service) => {
        setActiveService(service);
    };

    const toggleAccordion = (id) => {
        setActiveAccordion((prev) => (prev === id ? null : id));
        if (accordionRefs.current[id]) {
            accordionRefs.current[id].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="section section__services">
            <SectionHeader />

            <div className="services__wrap">
                <div className="services__list">
                    {servicesList.map((service) => (
                        <div
                            key={service.id}
                            className={`services__item ${activeService.id === service.id ? 'active' : ''}`}
                            onClick={() => handleServiceClick(service)}
                        >
                            <p className="services__item-text">{service.title}</p>
                        </div>
                    ))}
                </div>
                <ServiceInfo service={activeService} />
            </div>

            {/* Аккордеон для экранов после 1024px */}
            <div className="services__accordion">
                {servicesList.map((service) => (
                    <AccordionItem
                        key={service.id}
                        service={service}
                        isActive={activeAccordion === service.id}
                        toggleAccordion={toggleAccordion}
                        accordionRef={(el) => (accordionRefs.current[service.id] = el)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;