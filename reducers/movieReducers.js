import {
    FETCH_SUCCEEDED,
    FETCH_FAILED,
    UPDATE_SUCCESS,
    DELETE_SUCCESS,
} from '../actions/actionTypes';

const movieReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            console.log(`movies in reducers:   ${action.receivedMovies}`);
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        // case ADD_MOVIE:
        //     return [
        //         ...movies,
        //         action.newMovie
        //     ];
        case UPDATE_SUCCESS:
            return movies.map(eachMovie => (eachMovie.id.toString() === action.updatedMovie.id) ?
                {
                    ...eachMovie,
                    name: action.updatedMovie.name,
                    releaseYear: action.updatedMovie.releaseYear,
                } : eachMovie,
            );
        case DELETE_SUCCESS:
            const filteredMovies = movies.filter(eachMovie => {
                return eachMovie.id.toString() !== action.deletedMovieId.toString();
            });
            return filteredMovies;
        default:
            return movies; //state does not change
    }
};

export default movieReducers;
