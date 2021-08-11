import { all, fork, call, takeEvery, takeLatest, put, delay } from 'redux-saga/effects';
import axios from ' axios';

function logInAPI(data) {
    return axios.post('/api/login', data)
}

function* logIn(action) {
    try {
        // const result = yield call(logInAPI, action.data)
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            // data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI)
        yield delay(1000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            // data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}

function addPostAPI(data) {
    return axios.post('/api/post', data)
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data)
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchAddPost),
    ]);
}