import {
    FETCH_MOVIES,
    FETCH_SUCCEEDED,
    FETCH_FAILED,
    ADD_MOVIE,
    UPDATE_SUCCESS,
    UPDATE_MOVIE,
    DELETE_SUCCESS,
    DELETE_MOVIE,
} from '../actions/actionTypes';
//Saga effects
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({type: FETCH_SUCCEEDED, receivedMovies: receivedMovies});
    } catch (error) {
        yield put({type: FETCH_FAILED, error});
    }
}

export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}

function* addNewMovie(action) {
    try {
        const result = yield Api.insertNewMovie(action.newMovie);
        // console.log(`result = ${result}`);
        if (result === true) {
            yield put({type: FETCH_MOVIES});
        }
    } catch (e) {

    }
}

export function* watchAddNewMovie() {
    yield takeLatest(ADD_MOVIE, addNewMovie);
}

//Update movie
function* updateMovie(action) {
    try {
        const result = yield Api.updateMovieFromApi(action.updatedMovie);
        console.log(`result = ${result}`);
        if (result === true) {
            yield put({type: UPDATE_SUCCESS, updatedMovie: action.updatedMovie});
        }
    } catch (e) {

    }
}

export function* watchUpdateMovie() {
    yield takeLatest(UPDATE_MOVIE, updateMovie);
}

function* deleteMovie(action) {
    try {
        console.log('delete movie saga 63');
        const result = yield  Api.deleteMovieFromApi(action.deletedMovieId);
        console.log(`result in movie saga ${result}`);
        if (result === true) {
            yield put({
                type: DELETE_SUCCESS, deletedMovieId: action.deletedMovieId,
            });
        }
    } catch (e) {
console.log(`loi ${e}`);
    }
}

export function* watchDeleteMovie() {
    yield takeLatest(DELETE_MOVIE, deleteMovie);
}

