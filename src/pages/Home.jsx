import React from 'react';
import { Helmet } from "react-helmet-async";

import Footer from '../components/footer/Footer';

import Hero from '../components/hero/Hero';
import Client from '../components/clients/Client';
import Cases from '../components/cases/Cases';
import Services from '../components/services/Services';
import News from '../components/news/section/News';
import Contact from '../components/contacts/Contact';

const Home = () => (
    <div className='home padding'>
        <Helmet>
            <title>V-Brand — Маркетинговое агенство</title>
            <meta name="description" content="Поможем отстроиться от конкурентов и начать доминировать на вашем рынке. Упакуем ваш бизнес так, чтобы у клиентов текли слюни, а у конкурентов - слезы." />
        </Helmet>
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