import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.svg';
import landingImg from '../../images/landing.svg';

import { Container } from './styles';

const Pages: React.FC = () => {
  return (
    <Container>
      <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>

            <img src={landingImg} alt="" className="landing-img" />
          </main>

          <div className="location">
            <strong>Pirapora</strong>
            <span>Minas Gerais</span>
          </div>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Pages;
