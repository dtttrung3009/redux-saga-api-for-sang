import { call,all,fork} from 'redux-saga/effects';
import { watchFetchMovies,watchAddNewMovie,watchUpdateMovie,watchDeleteMovie } from './movieSagas';

export default function* rootSaga() {
    yield all([
        watchFetchMovies(),
        watchAddNewMovie(),
        watchUpdateMovie(),
        watchDeleteMovie()
    ])

}
