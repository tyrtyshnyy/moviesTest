const SET_CURRENT_MOVIE_COMMENT = 'SET_CURRENT_MOVIE_COMMENT'
const SET_FIRST_COMMENT = 'SET_FIRST_COMMENT'


const initialState = []


const comments = (state = initialState, action) =>  {
    // switch (action.type) {
    //     case SET_FIRST_COMMENT: {
    //         return  [...state, action.payload]
                 
            
    //     }

    //     case SET_CURRENT_MOVIE_COMMENT: {
    //         const {comment, currentComment} = action
    //         console.log(comment, currentComment)
    //         currentComment.commenty = [comment, ...currentComment.commenty]
    //         return [...state, ]
    //         // return state
                 
            
    //     }

    //     default: {
    //         return state
    //     }
    // }
}

export default comments

export const setCurrentMovieComment = (comment, currentComment) => ({ type: SET_CURRENT_MOVIE_COMMENT, comment, currentComment})
export const setFirstComment = (comment) => ({ type: SET_FIRST_COMMENT, payload: comment})