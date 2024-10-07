import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { newsGetChar } from '../newsList/newsSlice';
import { TNews } from 'types/TypesBase';

import './newsCard.scss';

const NewsCard = ({news}: TNews) => {
    const {id, img, title, genre, date} = news;
    const dispatch = useDispatch();

    return (
        <li className="card" onClick={() => dispatch(newsGetChar(id))}>
            <Link to={`/news/${id}`}>
                <div className="card__img">
                    <img src={img} alt={title} />
                </div>
                <div className="card__desc">
                    <div className="card__item">
                        <div className="card__item-title">{title}</div>
                        <div className="card__item-date">{date}</div>
                    </div>
                </div>
            </Link>
            <div className="card__genre">{genre}</div>
        </li>
    )
}

export default NewsCard;