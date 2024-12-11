import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import HeaderStatic from '../components/header/HeaderStatic';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className='padding'>
      <section className="section admin__index">
        <HeaderStatic />
        <button onClick={handleLogout}>Выйти из административной панели</button>
        <h2>Панель администратора</h2>
        <div className="admin-navigation">
          <Link to="/admin/news">
            <button className='admin__categories-btn'>Страница публикаций новостей</button>
          </Link>
          <Link to="/admin/case">
            <button className='admin__categories-btn'>Страница публикаций кейсов</button>
          </Link>
          <Link to="/admin/services">
            <button className='admin__categories-btn'>Страница с услугами</button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminPanel;
