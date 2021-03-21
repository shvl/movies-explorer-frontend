import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <footer className="footer page__section">
            <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__down">
                <p className="footer__text"> &#169; 2020 </p>
                <div className="footer__list">
                    <p className="footer__text footer__item">Яндекс.Практикум</p>
                    <p className="footer__text footer__item">Github</p>
                    <p className="footer__text footer__item">Facebook</p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;