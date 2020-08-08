import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => (
  <header className="page-header">
    <div className="top-bar-container">
      <Link to="/">
        <img src={backIcon} alt="logo-proffy" />
      </Link>
      <img src={LogoImg} alt="" />
    </div>
    <div className="header-content">
      <strong>{title}</strong>
      {children}
    </div>

  </header>
);

export default Header;
