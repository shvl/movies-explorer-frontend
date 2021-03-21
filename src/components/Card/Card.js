import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardSave }) {

    function handleLikeClick() {
        onCardSave(card);
    }
    const currentUser = React.useContext(CurrentUserContext);

    // // Показ иконки удаления
    // const isOwn = card.owner === currentUser._id;
    // const cardDeleteButtonClassName = (
    //     `button elements__trash ${isOwn ? 'elements__trash_active' : ''}`
    // );

    // //Показ лайка
    // const isLiked = card.likes && card.likes.some(like => like === currentUser._id);
    // const cardLikeButtonClassName = (
    //     `button elements__like ${isLiked ? 'elements__like_active' : ''}`
    // );

    return (
        <li className="elements__item" >
            <div className="card__label">
                <h2 className="card__title">В погоне за Бенкси</h2>
                <p className="card__time">27 минут</p>
            </div>
            <img src={card.link} alt={card.name} className="card__img" />
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        </li >

    );
}

export default Card;