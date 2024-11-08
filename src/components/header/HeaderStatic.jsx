import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './icons/Logo';
import DropDown from './DropDown';
import Button from '../elements/Button';

const HeaderStatic = () => (
    <header className='header__static'>
        <Logo />
        <div className='header__hero-wrap'>
            <nav className="header__hero-nav">
                <Link className='header__link' to="/about">Принципы</Link>
                <Link className='header__link' to="/cases">Кейсы</Link>
                <DropDown />
                <Link className='header__link' to="/contact">Контакты</Link>
                <Link className='header__link' to="/news">Новости</Link>
            </nav>
            <Button buttonText="Связаться с нами" />
        </div>
    </header>
);

export default HeaderStatic;