import { createStore } from "redux"
const initialState = {
    userConnected: false,
    firstName: 'Tony',
    score: 0,
}

export const connectUser = () => ({
    type: "connectUser",
})

const pointScoredAction = {type : "pointScored"}

function reducer(state, action) {
    if(action.type === "connectUser") {
        return {
            ...state, 
            userConnected: !state.userConnected
        }
    }
    if(action.type === "pointScored") {
        return {
            ...state,
            score: state.score + 1
        }
    }

    return state;
}

export const store = createStore(reducer, initialState)
const state = store.getState()
console.log(state)
store.dispatch(connectUser())
store.dispatch({type: "pointScored"})
console.log(state)