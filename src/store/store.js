import { createStore, combineReducers } from "redux"
import userReducer from "./userState"
import fetchReducer from "./fetchState"


const reducer = combineReducers({
    user: userReducer,
    fetch: fetchReducer,
})


export const store = createStore(reducer)

