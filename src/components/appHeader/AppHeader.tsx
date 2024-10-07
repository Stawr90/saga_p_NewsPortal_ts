import React from 'react';
import { Link } from 'react-router-dom';

import newsportalBg from '../../resources/img/newsportal_bg.jpg';
import './appHeader.scss';

const AppHeader = () => {

    return (
        <header className="app__header">
            <div className="app__header-wrapper">
                <h1 className="app__title">
                    <span>News Portal</span>
                </h1>
                <div className="app__links">
                    <Link to='/'><button className="app__btn">На главную</button></Link>
                    <Link to='/news'><button className="app__btn">Новости</button></Link>
                    <Link to='/profile'><button className="app__btn">Профиль</button></Link>
                </div>
            </div>
            <div className="app__img">
                <img src={newsportalBg} alt='background'/>
            </div>
        </header>
    )
}

export default AppHeader;