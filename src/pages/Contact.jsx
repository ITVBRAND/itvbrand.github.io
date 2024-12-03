import React from 'react';

import Footer from '../components/footer/Footer';
import PersonalContact from '../components/contacts/PersonalContact';

const Contact = () => (
    <div className='contact padding'>
        <PersonalContact />
        <Footer />
    </div>
);

export default Contact;