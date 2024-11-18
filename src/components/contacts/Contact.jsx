import React from 'react';

import './style.css';

import Email from './Email';
import Phone from './Phone';

import Tg from './social/tg';
import Inst from './social/Inst';
import Yt from './social/Yt';
import Vk from './social/Vk';
import Be from './social/Be';
import Gith from './social/Gith';

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
                <div className="contact__info">
                    <h3 className="contact__title">
                        Обратиться на прямую
                    </h3>
                    <p className="contact__text">
                        Информационный текст, объясняющий зачем писать на почту.
                    </p>
                    <div className="contact__data-wrap">
                        <div className="contact__data">
                            <Email />
                            <div className="contact__data-art">
                                <p className="contact__data-title">
                                    Email
                                </p>
                                <a className="contact__data-link" href="mailto:hello@vbrand.ru" rel="nofollow">
                                    hello@vbrand.ru
                                </a>
                            </div>
                        </div>
                        <span className='contact__data-line'></span>
                        <div className="contact__data">
                            <Phone />
                            <div className="contact__data-art">
                                <p className="contact__data-title">
                                    Телефон
                                </p>
                                <a className="contact__data-link" href="tel:+78005553555" rel="nofollow">
                                    8 (800) 555 35-55
                                </a>
                            </div>
                        </div>
                    </div>
                    <h3 className="contact__title">
                        Следи за нами в
                    </h3>
                    <div className="contact__social">
                        <a href="tg.ru" className="contact__social-link" rel="nofollow">
                            <Tg />
                        </a>
                        <a href="tg.ru" className="contact__social-link" rel="nofollow">
                            <Inst />
                        </a>
                        <a href="tg.ru" className="contact__social-link" rel="nofollow">
                            <Yt />
                        </a>
                        <a href="tg.ru" className="contact__social-link" rel="nofollow">
                            <Vk />
                        </a>
                        <a href="tg.ru" className="contact__social-link" rel="nofollow">
                            <Be />
                        </a>
                        <a href="tg.ru" className="contact__social-link" rel="nofollow">
                            <Gith />
                        </a>
                    </div>
                </div>
                <form className='contact__form'>
                    <div className="contact__form-wrap">
                        <div className="contact__form-group">
                            <label htmlFor="name">Имя</label>
                            <input type="text" id="name" name="name" placeholder="Иван Иванов" />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="example@mail.ru" required />
                        </div>
                    </div>
                    <div className="contact__form-wrap">
                        <div className="contact__form-group">
                            <label htmlFor="phone">Номер</label>
                            <input type="tel" id="phone" name="phone" placeholder="+7 (800) 555 35-55" required />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="company">Компания</label>
                            <input type="text" id="company" name="company" placeholder="Название компании / ИП" />
                        </div>
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="message">Сообщение</label>
                        <textarea id="message" name="message" placeholder="Введите сообщение..."></textarea>
                    </div>
                    <div className="contact__form-block">
                        <input className='contact__form-checkbox' type="checkbox" id="privacy" name="privacy" required />
                        <label htmlFor="privacy">Принимаю политику конфиденциальности и.т.д</label>
                    </div>
                    <div className="contact__form-group">
                        <button className='contact__btn' type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;