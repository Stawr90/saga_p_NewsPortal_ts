import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNewsRequest, newsList, newsLoadingStatus } from './newsSlice';

import HeaderList from '../headerList/HeaderList';
import NewsCard from '../newsCard/NewsCard';

import './newsList.scss';

const NewsList = () => {
    const news = useSelector(newsList);
    const loading = useSelector(newsLoadingStatus);
    const dispatch = useDispatch();
    const numNews = news.length;

    useEffect(() => {
        if (!news.length) {
            dispatch(fetchNewsRequest());
        }
    }, []);

    return (
        <div>
            <HeaderList found={numNews}/>
            {loading === 'loading' && <div className="loading"><h2>Loading news...</h2></div>}
            <div className="list">
                <ul className="list__news">
                    {news.map(item => (
                        <NewsCard key={item.id} news={item}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NewsList;