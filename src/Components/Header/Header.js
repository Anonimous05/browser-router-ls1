import React from 'react';
import logo1 from "../Main/logo.png";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="head">
            <img src={logo1} alt=""/>
            <nav className="main-nav">
                <ul>
                    <li><a href="/">Главная</a></li>
                </ul>
            </nav>
            <NavLink to="/add" className="add_button">+</NavLink>
        </header>
    );
};

export default Header;