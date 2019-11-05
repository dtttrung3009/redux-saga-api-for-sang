import {
    ADD_MOVIE,
    FETCH_MOVIES,
    FETCH_SUCCEEDED,
    FETCH_FAILED,
    UPDATE_MOVIE,
    UPDATE_SUCCESS,
    DELETE_MOVIE, DELETE_SUCCESS,
} from './actionTypes';

export const fetchMoviesAction = () => {
    return {
        type: FETCH_MOVIES,
    };
};

export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        //newMovie: newMovie
        newMovie,
    };
};
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies,
    };
};

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error,
    };
};
//update
export const updateItemAction = (updatedMovie) => {
    return {
        type: UPDATE_MOVIE,
        updatedMovie,
    };
};
//action by redux-saga
export const updateItemSuccessAction = (updatedMovie) => {
    return {
        type: UPDATE_SUCCESS,
        updatedMovie,
    };
};
export const deleteItemAction = (deletedMovieId) => {
    console.log('deleteItemAction');
    return {
        type: DELETE_MOVIE,
        deletedMovieId,
    };
};
export const deleteItemSuccessAction = (deletedMovieId) => {
    return {
        type: DELETE_SUCCESS,
        deletedMovieId,
    };
};
