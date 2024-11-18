import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cases from './pages/Cases';
import News from './pages/News';
import Services from './pages/services/Services';
import NotFound from './pages/NotFound';

import Service from './pages/services/Service';
import HeaderFixed from './components/header/HeaderFixed';
import HeaderMobile from './components/header/HeaderMobile';
import ScrollToTop from './components/settings/ScrollToTop';

function App() {
    return (
        <div className='body'>
            <Router>
                <ScrollToTop />
                <HeaderMobile />
                <HeaderFixed />
                <div className='body__wrapper'>
                    <div className='container'>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/cases" element={<Cases />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/service" element={<Service />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;