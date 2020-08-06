import React from 'react';
import Logo from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import givyClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import './stylesAdaptation.css';
const Landing: React.FC = () => (
  <div id="page-landing">
    <div id="page-landing-content" className="container">
      <div className="logo-container">
        <img src={Logo} alt="logo-profy" />
        <h2>Sua plataforma de estudos online.</h2>
      </div>

      <img
        src={LandingImg}
        alt="landing-image"
        className="hero-image"
      />

      <div className="buttons-container">
        <a href="ttt" className="study">
          <img src={studyIcon} alt="estudar" />
          Estudar

        </a>

        <a href="ttt" className="give-classes">
          <img src={givyClassIcon} alt="classe" />
          Dar Aulas
        </a>
      </div>

      <span className="total-connections">
        Total de 250 conexões já realizadas
        <img src={purpleHeartIcon} alt="coracao-roxo" />
      </span>
    </div>
  </div>
);

export default Landing;
