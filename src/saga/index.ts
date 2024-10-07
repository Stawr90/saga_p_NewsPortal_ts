import { call, put, takeLatest } from 'redux-saga/effects';
import { useHttp } from '../hooks/http.hook';
import { fetchNewsSuccess, fetchNewsFailure } from 'components/newsList/newsSlice';

function* fetchNewsSaga() {
    try {
        const { request } = useHttp();
        const news = yield call(request, "http://localhost:3000/news");
        yield put(fetchNewsSuccess(news));
    } catch (error) {
        yield put(fetchNewsFailure());
    }
}

export function* watchFetchNews() {
    yield takeLatest('news/fetchNewsRequest', fetchNewsSaga);
}