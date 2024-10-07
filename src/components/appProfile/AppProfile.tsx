import React from 'react';
import { useSelector } from 'react-redux';
import { profile } from 'components/loginForm/loginSlice';

import './appProfile.scss';

const AppProfile = () => {
    const { username, password } = useSelector(profile);

    return (
        <div className="profile">
            <h2 className="profile__title">Ваш профиль</h2>
            <h2 className="profile__subtitle">Данные для входа</h2>
            <div className="profile__descr">
                <div>Логин: <span>{username}</span></div>
                <div>Пароль: <span>{password}</span></div>
            </div>
        </div>
    )
}

export default AppProfile;