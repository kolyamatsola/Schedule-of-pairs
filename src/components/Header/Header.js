import React from 'react';
import './Header.css';
import App from '../../App';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

function Header() {
  return (
    <div className="header">
      <div className="logo">Розклад</div>
      <nav className="nav-buttons">
        <button className="nav-button" onClick={App(2)}>Розклад</button>
        <button className="nav-button" onClick={App(1)}>Контакти</button> 
        <button className="nav-button" onClick={App(3)}>Увійти</button>
      </nav>
    </div>
  );
}

export default Header;
