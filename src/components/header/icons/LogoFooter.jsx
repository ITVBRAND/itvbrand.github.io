import React from 'react';
import { Link } from 'react-router-dom';

import '../style.css';

const LogoFooter = () => (
    <Link className='header__logo' to="/">
        <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g clipPath="url(#clip0_1098_2251)">
                <mask id="mask0_1098_2251" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <path d="M32 0H0V32H32V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_1098_2251)">
                    <path d="M4.60156 0L16.0671 19.4497L27.3991 0H4.60156Z" fill="#E4E4E7"/>
                    <path d="M32.0002 8.88916V32.0005H18.5098L32.0002 8.88916Z" fill="#E4E4E7"/>
                    <path d="M0 8.88916V32.0005H13.4905L0 8.88916Z" fill="#E4E4E7"/>
                </g>
            </g>
        </svg>
        <span className='logo__text'>
            v-brand
        </span>
    </Link>
);

export default LogoFooter;