import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers/reducer";


const rootReducer = combineReducers({
    films: reducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk),
    ))




