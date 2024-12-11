import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Logo from './icons/Logo';
import DropDown from './DropDown';
import FeedBackBtn from './FeedBackBtn';

const HeaderFixed = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY && currentScrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`header__fixed ${isVisible ? 'visible' : ''}`}>
      <div className="header__fixed-wrap">
        <Logo />
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
      </div>
    </header>
  );
};

export default HeaderFixed;