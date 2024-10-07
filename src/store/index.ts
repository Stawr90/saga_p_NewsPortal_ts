import { configureStore } from "@reduxjs/toolkit";
import news from '../components/newsList/newsSlice';
import login from '../components/loginForm/loginSlice';
import createSagaMiddleware from 'redux-saga';
import { watchFetchNews } from '../saga/index';

const sagaMiddleware = createSagaMiddleware();

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {news, login},
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(stringMiddleware)
        .concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(watchFetchNews);

export default store;