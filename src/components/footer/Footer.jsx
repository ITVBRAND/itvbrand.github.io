import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import LogoFooter from '../header/icons/LogoFooter';

const Footer = () => (
    <footer className='footer'>
        <LogoFooter />
        <nav className="footer__nav">
            <p className="footer__text footer__copyright">
                Copyright © 2025 Vbrand |
            </p>
            <p className="footer__text footer__copyright">
                Все права защищены |
            </p>
            <Link className='footer__text footer__link' to="/oferta">
                Публичная оферта |
            </Link>
            <Link className='footer__text footer__link' to="/policy">
                Политика конфиденциальности
            </Link>
        </nav>
    </footer>
);

export default Footer;