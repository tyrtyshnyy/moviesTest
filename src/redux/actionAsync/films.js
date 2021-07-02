import axios from 'axios'
import {setItems, setIsFetching, setIsLoadedMovie} from '../reducers/reducer'

export const  getFilms = (currentPage = 6, perPage) => {
   
    return async (dispatch) => {
        try {
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


// export const  getCurrentRepo = async (username, reponame, setRepo, setIsLoaded) => {
//         const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}`)
//         setRepo(response.data)
//         setIsLoaded(true)
//     }

// export const  getCotributors = async (username, reponame, setContributors) => {
//     const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}/contributors?page=1&per_page=10`)
//     setContributors(response.data)
// }




