import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';


function Header() {

    return (
        <header className="header page__section">
            <img src={logo} alt="Логотип" class="header__logo" />
            <nav className="header__nav">
                <Link to="./movies" className="page__link ">Фильмы</Link>
                <Link to=".//saved-movies" className="page__link ">Сохраненные фильмы</Link>
            </nav>
            <div className="header__auth">
                <Link to="./signup" className="page__link header__auth_register">Регистрация</Link>
                <Link to="./signin" className="page__link page__link_blue">Войти</Link>

            </div>
        </header>
    );
}

export default Header;
