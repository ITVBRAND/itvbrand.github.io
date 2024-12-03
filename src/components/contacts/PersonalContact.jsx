import React from 'react';

import './style.css';

import HeaderStatic from '../../components/header/HeaderStatic';
import ContactInfo from './ContactInfo';
import Maps from './Maps';

const PersonalContact = () => {

    return (
        <section className="section personal__contact">
            <HeaderStatic />
            <div className="personal__contact-wrap">
                <div className="personal__contact-maps">
                    <Maps />
                </div>
                <div className='persomal__contact-info'>
                    <h1 className="personal__contact-title">
                        Контакты
                    </h1>
                    <ContactInfo />
                </div>
            </div>
        </section>
    );
};

export default PersonalContact;