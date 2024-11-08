import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Arrow from './icons/Arrow';
import Motion from './icons/Motion';
import Ad from './icons/Ad';
import Dev from './icons/Dev';
import Branding from './icons/Branding';
import Business from './icons/Business';

const DropDown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption] = useState(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200); // Задержка в 200 мс
    };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link className="dropdown__toggle" to="/services">
        {selectedOption ? selectedOption.label : 'Услуги'}
        <Arrow />
      </Link>
      {isOpen && (
        <ul className="dropdown__menu">
            <li className='dropdown__item'>
                <Link className='dropdown__link' to="/service">
                    <Motion />
                    Дизайн
                </Link>
            </li>
            <li className='dropdown__item'>
                <Link className='dropdown__link' to="/service">
                    <Dev />
                    Веб-разработка
                </Link>
            </li>
            <li className='dropdown__item'>
                <Link className='dropdown__link' to="/service">
                    <Ad />
                    Реклама
                </Link>
            </li>
            <li className='dropdown__item'>
                <Link className='dropdown__link' to="/service">
                    <Branding />
                    Брендинг
                </Link>
            </li>
            <li className='dropdown__item'>
                <Link className='dropdown__link' to="/service">
                    <Business />
                    Упаковка бизнеса
                </Link>
            </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;