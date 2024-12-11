import React from 'react';
import './style.css';
import Wallpaper from '../../static/lemon.webm';
import HeaderHero from '../header/HeaderHero';
import Arrow from './Arrow';
import TypingText from '../elements/TypingText'; // Импортируйте компонент

const Hero = () => (
  <div className='hero'>
    <HeaderHero />
    <div className="hero__block">
      <article className="hero__article">
        <h1 className='hero__article-title'>
        <TypingText
          text="Маркетинговое агентство, где рождаются"
          options={['сайты', 'смыслы', 'бренды']}
          speed={90}
          pause={100}
        />
        </h1>
        <a className='hero__link' href='#clients'>
          <span className='hero__link-text'>Читать далее</span>
          <Arrow />
        </a>
      </article>
      <video className="hero__wallpaper" src={Wallpaper} autoPlay loop muted playsInline>
      </video>
    </div>
  </div>
);

export default Hero;