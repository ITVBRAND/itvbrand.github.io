import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Snowfall from 'react-snowfall';

import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import AdminNews from './pages/AdminNews';
import AdminCase from './pages/AdminCase';
import AdminServices from './pages/AdminServices';
import PrivateRoute from './PrivateRoute';

import Home from './pages/Home';
// import About from './pages/About';
import Contact from './pages/Contact';
import Cases from './pages/Cases';
import News from './pages/News';
import Services from './pages/services/Services';
import NotFound from './pages/NotFound';

import Service from './pages/services/Service';
import HeaderFixed from './components/header/HeaderFixed';
import HeaderMobile from './components/header/HeaderMobile';
import ScrollToTop from './components/settings/ScrollToTop';
import NewsDetail from './pages/NewsDetail'; // Импортируем компонент NewsDetail

function App() {

  return (
    <div className='body'>
      <Router>
        <ScrollToTop />
        <Snowfall
           color="#fff"
           snowflakeCount={200}
           style={{ position: 'fixed', width: '100%', height: '100%', zIndex: 9999 }}
         />
        <HeaderMobile />
        <HeaderFixed />
        <div className='body__wrapper'>
          <div className='container'>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <AdminPanel />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/news"
                element={
                  <PrivateRoute>
                    <AdminNews />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/case"
                element={
                  <PrivateRoute>
                    <AdminCase />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/services"
                element={
                  <PrivateRoute>
                    <AdminServices />
                  </PrivateRoute>
                }
              />
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} /> {/* Новый маршрут для отображения статьи */}
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