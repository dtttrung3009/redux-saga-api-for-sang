const urlGetMovies = 'http://5db9b400eddc81001495f0df.mockapi.io/api/movies';

function* getMoviesFromApi() {
    const json = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    }).then(response=>response.json());
    const movies = yield (json);
    // console.log(movies);
    return movies;
}
export const Api = {
    getMoviesFromApi
};
