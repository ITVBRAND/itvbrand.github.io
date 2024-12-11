import React from 'react';

import './style.css';

import Email from './Email';
import Phone from './Phone';

import Tg from './social/tg';
import Inst from './social/Inst';
import Yt from './social/Yt';
import Vk from './social/Vk';
import Gith from './social/Gith';

const ContactInfo = () => {

    return (
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
                        <a className="contact__data-link" href="tel:+79286222622" rel="nofollow">
                            8 (928) 622 26-22
                        </a>
                    </div>
                </div>
            </div>
            <h3 className="contact__title">
                Следи за нами в
            </h3>
            <div className="contact__social">
                <a href="https://t.me/vbrandru" className="contact__social-link" rel="nofollow" target='blank_'>
                    <Tg />
                </a>
                <a href="https://www.instagram.com/thevorontsov/" className="contact__social-link" rel="nofollow" target='blank_'>
                    <Inst />
                </a>
                <a href="https://www.youtube.com/@PavelVorontsov" className="contact__social-link" rel="nofollow" target='blank_'>
                    <Yt />
                </a>
                <a href="https://vk.com/vbrandru" className="contact__social-link" rel="nofollow" target='blank_'>
                    <Vk />
                </a>
                <a href="https://github.com/ITVBRAND" className="contact__social-link" rel="nofollow" target='blank_'>
                    <Gith />
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;