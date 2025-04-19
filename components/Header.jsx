import React, { useState, useEffect } from 'react';
//import './Header.css';
//import './HeaderResponsible.css'
import logo from './images/logo.png'
import mobile_logo from './images/gopopme.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header>
            <div className="headerMenuPart">
                <img className="headerLogo" src={logo} alt="Логотип" />
                <a href="/index" className="headerMenuItem">Главная</a>
                <a href="/link" className="headerMenuItem">Товары</a>
                <a href="/team" className="headerMenuItem">О нас</a>
                <a href="/link#contactPage" className="headerMenuItem">Связь</a>
            </div>
            <a href="/">
                <img className="mobile_header" src={mobile_logo} alt="Логотип для смартфонов" />
            </a>
            <nav className="mobile_navbar">
                <button id="menu-toggle" onClick={toggleMenu}>☰</button>
                <ul id="menu" className={menuOpen ? '' : 'hidden'}>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/">Товары</a></li>
                    <li><a href="/">О нас</a></li>
                </ul>
            </nav>
            <div className="headerLoginPart">
                <button className="headerLoginBtn">Войти</button>
                <button className="headerSignUpBtn">Зарегистрироваться</button>
            </div>
        </header>
    );
};

export default Header;