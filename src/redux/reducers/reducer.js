const SET_ITEMS = 'SET_ITEMS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_FETCH_ERROR = 'SET_FETCH_ERROR'
const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE'
const SET_IS_LOADED_MOVIE = 'SET_IS_LOADED_MOVIE'


const initialState = {
    items: [],
    isFetching: true,
    currentPage: 1, //текущая страница
    perPage: 20, // сколько номеров отображать
    totalCount: 0, // кол-во репозитопиев
    isFetchingError: false,
    currentMovie: null,
    isLoadedMovie: false

}
function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_ITEMS: {
           return {
            ...state, 
            items: action.payload.data,
            isFetching: true,
            totalCount: action.payload.data.movie_count,
            isLoadedMovie: true
           } 
        }
        
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        case SET_FETCH_ERROR: {
            return {
                ...state,
                isFetchingError: action.payload
            }
        }
        case SET_CURRENT_MOVIE: {
            return {
                ...state,
                currentMovie: action.payload
            }
        }
        case SET_IS_LOADED_MOVIE: {
            return {
                ...state,
               isLoadedMovie: action.payload
            }
        }

        default: {
            return state
        }
    }
}

export default reducer


export const setItems = (items) => ({ type: SET_ITEMS, payload: items})
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool})
export const setCurrentPage = (items) => ({ type: SET_CURRENT_PAGE, payload: items})
export const setFetchingError = (items) => ({ type: SET_FETCH_ERROR, payload: items})
export const setCurrentMovie = (items) => ({ type: SET_CURRENT_MOVIE, payload: items})
export const setIsLoadedMovie = (items) => ({ type: SET_IS_LOADED_MOVIE, payload: items})


