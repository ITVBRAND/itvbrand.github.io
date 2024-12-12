import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const ContactBtn = () => {

    return (
        <div className="contact__burger">
            <Link className='contact__burger-link' to="/contact">
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
            </Link>
        </div>
    );
};

export default ContactBtn;
