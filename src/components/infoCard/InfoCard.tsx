import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { newsCard } from '../newsList/newsSlice';

import './infoCard.scss';

const InfoCard = () => {
    const card = useSelector(newsCard);
    const {img, title, date, genre, descr} = card;

    return (
        <div className='info'>
            <div className="info__img">
                <img src={img} alt={title}/>
            </div>
            <div className="info__text">
                <div className="info__title">{title}</div>
                <div className="info__char">
                    <span className='info__char-time'>{date}</span>
                    <span className='info__char-genre'>{genre}</span>
                </div>
                <div className="info__descr">{descr}</div>
                <Link to='/news'><button className="info__btn">Новости</button></Link>
            </div>
        </div>
    )
}

export default InfoCard;