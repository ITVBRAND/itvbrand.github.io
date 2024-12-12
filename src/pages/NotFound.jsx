import React from 'react';

import Footer from '../components/footer/Footer';

import '../components/notfound/style.css';

import VectorNotFound from '../components/notfound/vector';
import imgNotFound from '../static/404hand.webp';
import HeaderStatic from '../components/header/HeaderStatic';

const NotFound = () => {
  return (
    <div className='notfound padding'>
        <div className="section section__notfound">
          <HeaderStatic />
          <div className="notfound__wrap">
            <h1 className='notfound__title'><span>Прикольно!</span><span>Ты сломал нам сайт</span></h1>
            <div className="notfound__bg">
              <VectorNotFound />
            </div>
            <img className='notfound__img' src={imgNotFound} alt="hand404" />
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default NotFound;