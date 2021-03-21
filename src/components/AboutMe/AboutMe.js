import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import myPhoto from '../../images/myPhoto.jpg';
// import { Link } from 'react-router-dom';


function AboutMe() {

    return (
        <section className="aboutMe page__section">
            <h2 className="page__title">Студент</h2>
            <div className="aboutMe__resume">
                <h3 className="aboutMe__name">Светлана</h3>
                <h4 className="aboutMe__job">Фронтенд-разработчик</h4>
                <p className="page__text aboutMe__text">Текст о себе Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vero voluptatum assumenda adipisci aliquam ipsam laudantium ducimus
                totam explicabo eaque minima quo placeat, cum iusto quibusdam labore
                eveniet suscipit illum. Fugiat.</p>
                <div className="aboutMe__links">
                    <p className="page__link">Facebook</p>
                    <p className="page__link">GitHub</p>
                </div>
                <img className="aboutMe__photo" src={myPhoto} alt="Фото Светланы"></img>
            </div>
            <Portfolio />

        </section>
    );
}

export default AboutMe;