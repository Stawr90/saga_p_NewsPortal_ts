import React from 'react';

import './appHome.scss';

const AppHome = () => {
    return (
        <div className="home">
            <h2 className="home__title">News Portal</h2>
            <h2 className="home__subtitle">Главная страница</h2>
            <div className="home__descr">
                Портал новостей по темам: 
                <span> Космос, IT, Еда, Природа, Кино</span>
            </div>
        </div>
    )
}

export default AppHome;