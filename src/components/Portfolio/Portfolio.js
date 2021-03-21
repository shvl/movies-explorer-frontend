import React from 'react';
import './Portfolio.css';

function Portfolio() {

    return (

        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <p className="portfolio__text">Статичный сайт</p>
                    <p className="portfolio__arrow" > ↗</p>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__text">Адаптивный сайт </p>
                    <p className="portfolio__arrow"> ↗</p>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__text">Одностраничное приложение </p>
                    <p className="portfolio__arrow" > ↗</p>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;