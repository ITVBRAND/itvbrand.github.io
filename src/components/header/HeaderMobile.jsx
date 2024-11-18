import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const menuItems = [
    {
        path: '/',
        icon: (
            <svg className='header__mobile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path d="M3.84483 18.5H16.1552C16.6557 18.5 17.1196 18.5 17.5004 18.5C18.0527 18.5 18.5 18.0523 18.5 17.5V7.88719C18.5 7.55841 18.3384 7.25064 18.0677 7.06398L10.5677 1.89154C10.2259 1.65582 9.77403 1.65583 9.43224 1.89154L1.93226 7.06398C1.66161 7.25064 1.5 7.55841 1.5 7.88719V17.5C1.5 18.0523 1.94733 18.5 2.49962 18.5C2.88043 18.5 3.34432 18.5 3.84483 18.5Z" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M7.36133 14.3956C7.36133 13.1006 7.36145 12.0508 7.36145 12.0508H12.6372C12.6372 12.0508 12.6372 13.1006 12.6372 14.3956V18.4991H7.36133V14.3956Z" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'Главная',
    },

    {
        path: '/about',
        icon: (
            <svg className='header__mobile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path d="M8.53341 11.4655H3.84375L11.4644 1.5V8.53448H16.1541L8.53341 18.5V11.4655Z" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'Принципы',
    },

    {
        path: '/cases',
        icon: (
            <svg className='header__mobile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path d="M1.50012 7.3619C1.50012 6.86144 1.5001 6.39761 1.50008 6.01683C1.50005 5.4645 1.94779 5.01709 2.50012 5.01709H17.5C18.0523 5.01709 18.5 5.46442 18.5 6.01671C18.5 6.39751 18.5 6.86139 18.5 7.3619V16.1549C18.5 16.6555 18.5 17.1193 18.5 17.5001C18.5 18.0524 18.0523 18.4998 17.5 18.4998H2.50012C1.94785 18.4998 1.50015 18.0524 1.50013 17.5002C1.50013 17.1194 1.50012 16.6555 1.50012 16.1549V7.3619Z" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.18945 4.72411V3.84481C6.18945 2.54981 7.23926 1.5 8.53426 1.5H11.4653C12.7603 1.5 13.8101 2.54981 13.8101 3.84481V4.72411" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M1.79297 11.4653H18.2066" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M6.18945 9.70703V12.638" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M13.8105 9.70703V12.638" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'Кейсы',
    },

    {
        path: '/services',
        icon: (
            <svg className='header__mobile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path d="M2.08145 13.6778L3.44796 13.8919C4.45672 14.0498 5.17713 14.9737 5.10283 16.0146L5.00216 17.4254C4.97283 17.8365 5.19179 18.2234 5.55443 18.4024L6.56514 18.9003C6.92778 19.0793 7.36081 19.0123 7.65702 18.7334L8.67259 17.7735C9.42139 17.0656 10.5767 17.0656 11.3264 17.7735L12.342 18.7334C12.6382 19.0134 13.0703 19.0793 13.4339 18.9003L14.4465 18.4014C14.8082 18.2234 15.0262 17.8375 14.9969 17.4275L14.8961 16.0146C14.8219 14.9737 15.5423 14.0498 16.551 13.8919L17.9175 13.6778C18.3154 13.6159 18.636 13.3109 18.7259 12.9089L18.9752 11.7911C19.0652 11.3891 18.9058 10.9721 18.5735 10.7401L17.4328 9.94116C16.5911 9.35126 16.334 8.19938 16.8424 7.29443L17.5314 6.06854C17.7318 5.71157 17.6987 5.26461 17.4474 4.94265L16.7485 4.04573C16.4973 3.72375 16.0789 3.59077 15.6938 3.71176L14.3723 4.12572C13.3958 4.43168 12.3548 3.91873 11.9794 2.94783L11.473 1.63494C11.3244 1.25098 10.9618 0.99901 10.5581 1L9.4379 1.00301C9.03421 1.004 8.67259 1.25799 8.52599 1.64295L8.03229 2.94083C7.66087 3.91774 6.61499 4.43469 5.63556 4.12672L4.25928 3.69476C3.87317 3.57277 3.45285 3.70676 3.20165 4.03073L2.50763 4.92865C2.25642 5.25361 2.22612 5.70158 2.43041 6.05854L3.13517 7.28743C3.65422 8.1933 3.40007 9.35622 2.55357 9.94923L1.42654 10.7391C1.09419 10.9721 0.934875 11.3891 1.0248 11.7901L1.27406 12.9079C1.363 13.3109 1.68361 13.6159 2.08145 13.6778Z" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M11.9753 8.02498C13.0659 9.11566 13.0659 10.8846 11.9753 11.9753C10.8846 13.0659 9.11566 13.0659 8.02498 11.9753C6.93438 10.8846 6.93438 9.11566 8.02498 8.02498C9.11566 6.93438 10.8846 6.93438 11.9753 8.02498Z" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
        ),
        title: 'Услуги',
    },

    {
        path: '/contact',
        icon: (
            <svg className='header__mobile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_1436_2520)">
                    <path d="M6.35715 1.5H3.04545C2.19192 1.5 1.5 2.19192 1.5 3.04545C1.5 11.5808 8.41924 18.5 16.9545 18.5C17.808 18.5 18.5 17.808 18.5 16.9545V13.6428L14.8572 11.2143L12.9682 13.1031C12.6402 13.4313 12.1499 13.5333 11.7376 13.3204C11.0385 12.9592 9.90398 12.2806 8.78573 11.2143C7.64073 10.1225 6.96987 8.94612 6.63317 8.23435C6.44447 7.83537 6.55371 7.37486 6.86577 7.0628L8.78573 5.14285L6.35715 1.5Z" stroke="#FCD900" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_1436_2520">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ),
        title: 'Контакты',
    },

    {
        path: '/news',
        icon: (
            <svg className='header__mobile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path d="M18.4991 7.65517C18.4991 10.8546 16.8577 13.8103 15.2749 13.8103C13.6922 13.8103 12.0508 10.8546 12.0508 7.65517C12.0508 4.45573 13.6922 1.5 15.2749 1.5C16.8577 1.5 18.4991 4.45573 18.4991 7.65517Z" stroke="#FCD900" strokeWidth="1.5"/>
                <path d="M15.2759 13.8103C15.2759 13.8103 5.31034 11.7586 4.13793 11.4655C2.96552 11.1724 1.5 9.63573 1.5 7.65517C1.5 5.67457 2.96552 4.13793 4.13793 3.84483C5.31034 3.55172 15.2759 1.5 15.2759 1.5" stroke="#FCD900" strokeWidth="1.5"/>
                <path d="M3.8457 11.7588V16.1553C3.8457 17.4504 3.84581 18.5002 3.84581 18.5002H9.12157C9.12157 18.5002 9.12157 17.4504 9.12157 16.1553V12.9312" stroke="#FCD900" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
        ),
        title: 'Новости',
    },
];

const HeaderMobile = () => {
    const navLinksRef = useRef([]);
    const lightRef = useRef(null);

    useEffect(() => {
        const links = navLinksRef.current;
        const light = lightRef.current;

        function moveLight(element) {
            const { offsetLeft, offsetWidth } = element;
            light.style.left = `${offsetLeft - offsetWidth / 4}px`;
        }

        function activeLink(linkActive) {
            links.forEach(link => {
                link.classList.remove('active');
            });
            linkActive.classList.add('active');
        }

        links.forEach((link) => {
            link.addEventListener('click', () => {
                moveLight(link);
                activeLink(link);
            });
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', () => {
                    moveLight(link);
                    activeLink(link);
                });
            });
        };
    }, []);

    return (
        <div className="nav__container">
            <nav className="nav container">
                <ul className="nav__links">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`nav__link ${index === 0 ? 'active' : ''}`}
                            ref={el => navLinksRef.current[index] = el}
                        >
                            <Link to={item.path}>
                                {item.icon}
                                <span className="nav__title">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                    <div className="nav__light" ref={lightRef}></div>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMobile;
