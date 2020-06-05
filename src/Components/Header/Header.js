import React from 'react';
import logo1 from "../Main/logo.png";
import {NavLink} from "react-router-dom";
import korzina from './icons8-корзина-40.png';

const Header = () => {
    return (
        <header className="head">
            <img className="logo" src={logo1} alt=""/>
            <nav className="main-nav">
                <ul>
                    <li><a href="/">Главная</a></li>
                </ul>
            </nav>
            <NavLink className="add_button" to="/korzina"><img src={korzina} alt=""/></NavLink>
        </header>
    );
};

export default Header;