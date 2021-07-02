import axios from 'axios'
import { setItems, setIsFetching, setIsLoadedMovie, setCurrentMovie } from '../reducers/reducer'

export const getFilms = (currentPage = 1, perPage) => {

    return async (dispatch) => {
        try {
            dispatch(setCurrentMovie(null))
            dispatch(setIsFetching(false))
            dispatch(setIsLoadedMovie(false))
            const allRepo = await axios.get(`https://yts.mx/api/v2/list_movies.json?&page=${currentPage}&limit=${perPage}`)
            dispatch(setItems(allRepo.data))

        } catch (e) {
            console.log(e)
            dispatch(setIsFetching(true))

        }
    }
}

export const getCurrentMovie = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            dispatch(setCurrentMovie(response.data.data.movie))
        } catch (e) {
            console.log(e)
            dispatch(setIsFetching(true))
        }


    }
}
