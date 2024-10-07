import { createSlice } from "@reduxjs/toolkit";

import { InputItems } from "types/TypesBase";

interface IFetchLogin {
    username?: string,
    password?: string
}

interface IStateLogin {
    profile: IFetchLogin,
    login: boolean,
    inputItems: { name: InputItems, placeholder: string}[]
}

const initialState: IStateLogin = {
    profile: {
        username: 'Admin',
        password: '12345'
    },
    login: false,
    inputItems: [
        {
            name: InputItems.USER_NAME,
            placeholder: 'Username'
        },
        {
            name: InputItems.PASSWORD,
            placeholder: 'Password'
        }
    ]
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginGetChar: (state, action) => {
            if (action.payload.username === state.profile.username && action.payload.password === state.profile.password) {
                localStorage.setItem('isAuthenticated', 'true');
                state.login = true;
            } else {
                alert('Имя пользователя или пароль введены неверно');
            }
        }
    }
})

export const useLog = (state) => state.login.login;
export const profile = (state) => state.login.profile;
export const inpItems = (state) => state.login.inputItems;

const {actions, reducer} = loginSlice;
export default reducer;
export const {loginGetChar} = actions;