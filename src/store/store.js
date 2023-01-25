import { createStore } from "redux"
const initialState = {
    userConnected: false,
    firstName: 'Tony',
    lastName: 'Stark',
}

export const connectUser = () => ({
    type: "connectUser",
})


function reducer(state, action) {
    if(action.type === "connectUser") {
        return {
            ...state, 
            userConnected: !state.userConnected
        }
    }
    return state;
}

export const store = createStore(reducer, initialState)

