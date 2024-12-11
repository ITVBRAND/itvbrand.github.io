import React from 'react';

import Footer from '../components/footer/Footer';

import Hero from '../components/hero/Hero';
import Client from '../components/clients/Client';
import Cases from '../components/cases/Cases';
import Services from '../components/services/Services';
import News from '../components/news/section/News';
import Contact from '../components/contacts/Contact';

const Home = () => (
    <div className='home padding'>
        <Hero />
        <Client />
        <Cases />
        <Services />
        <News />
        <Contact />
        <Footer />
    </div>
);

export default Home;