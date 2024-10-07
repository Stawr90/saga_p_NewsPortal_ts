import { createSlice } from "@reduxjs/toolkit";
import { IStateNews } from "types/TypesBase";

const initialState: IStateNews = {
    news: [],
    newsLoadingStatus: 'idle',
    newsCard: null
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        fetchNewsRequest: (state) => {
            state.newsLoadingStatus = 'loading';
        },
        fetchNewsSuccess: (state, action) => {
            state.newsLoadingStatus = 'succeeded';
            state.news = action.payload;
        },
        fetchNewsFailure: (state) => {
            state.newsLoadingStatus = 'error';
        },
        newsGetChar: (state, action) => {
            state.newsCard = state.news.find(item => item.id === action.payload);
        }
    }
});

export const newsList = (state) => state.news.news;
export const newsCard = (state) => state.news.newsCard;
export const newsLoadingStatus = (state) => state.news.newsLoadingStatus;

const { actions, reducer } = newsSlice;
export default reducer;
export const { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure, newsGetChar } = actions;