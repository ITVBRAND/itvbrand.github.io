import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import '../styles/admin.css';

import Footer from '../components/footer/Footer';
import HeaderStatic from '../components/header/HeaderStatic';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (error) {
      setError(error.message);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='padding'>
        <form className='section section__auth' onSubmit={handleLogin}>
            <HeaderStatic />
            <div className='section__auth-wrap'>
                <h2>v-brand admin</h2>
                <div className='contact__form-group'>
                    <label htmlFor="email">Логин</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className='contact__form-group'>
                    <label htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit">Войти</button>
            </div>
        </form>
        {showModal && (
            <div className="auth__modal">
                <div className="auth__modal-content">
                    <span className="auth__modal-close" onClick={closeModal}>&times;</span>
                    <p>{error}</p>
                </div>
            </div>
        )}
        <Footer />
    </div>
  );
};

export default Login;
