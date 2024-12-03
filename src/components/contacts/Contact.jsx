import React from 'react';

import './style.css';

import ContactInfo from './ContactInfo';
import Forma from './Forma';

const Contact = () => {

    return (
        <section className="section section__contact">
            <article className="section__article">
                <h2 className="article__title">
                    Контакты
                </h2>
                <p className="article__text">
                    По вопросам сотруднечества оставляйте заявки
                </p>
            </article>
            <div className="contact__wrap">
                <ContactInfo />
                <Forma />
            </div>
        </section>
    );
};

export default Contact;