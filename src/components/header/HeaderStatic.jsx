import React from 'react';
import { Link } from 'react-router-dom';

import DropDown from './DropDown';
import LogoFooter from './icons/LogoFooter';
import FeedBackBtn from './FeedBackBtn';

const HeaderStatic = () => (
    <header className='header__static'>
        <LogoFooter />
        <div className='header__hero-wrap'>
            <nav className="header__hero-nav">
                <Link className='header__link' to="/about">Принципы</Link>
                <Link className='header__link' to="/cases">Кейсы</Link>
                <DropDown />
                <Link className='header__link' to="/contact">Контакты</Link>
                <Link className='header__link' to="/news">Новости</Link>
            </nav>
            <FeedBackBtn />
        </div>
    </header>
);

export default HeaderStatic;