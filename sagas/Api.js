const urlGetMovies = 'http://5db9b400eddc81001495f0df.mockapi.io/api/movies';

function* getMoviesFromApi() {
    const json = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    }).then(response => response.json());
    const movies = yield (json);
    // console.log(movies);
    return movies;
}


//send POST request to add new Movie
function* insertNewMovie(newMovie) {
    const response = yield fetch(urlGetMovies, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear,
        }),
    });
    console.log(`response =${JSON.stringify(response)}`);
    return yield (response.status === 201);
};

function* updateMovieFromApi(updatedMovie) {
    console.log(`updatedMovie: ${JSON.stringify(updatedMovie)}`);
    const urlLink = `${urlGetMovies}/${updatedMovie.id.toString()}`;
    const response = yield fetch(urlLink, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: updatedMovie.name,
            releaseYear: updatedMovie.releaseYear,
        }),
    });
    console.log(`response =${JSON.stringify(response.status)}`);
    return yield (response.status === 200);
}
function* deleteMovieFromApi(deletedMovieId) {
    const urlLink = `${urlGetMovies}/${deletedMovieId}`;
    const response = yield fetch(urlLink, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: ""
    });
    return yield (response.status === 200);
}
export const Api = {
    getMoviesFromApi,
    insertNewMovie,
    updateMovieFromApi,
    deleteMovieFromApi
};
