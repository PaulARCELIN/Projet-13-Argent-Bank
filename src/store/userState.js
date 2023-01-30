const initialState = {
    isUserConnected: false,
    firstName: '',
    lastName: '',
    email: '',
}

export const setUserConnected = () => ({
    type: "setUserConnected"
})

export const setUserEmail = (email) => ({
    type: "setUserEmail",
    payload: email,
})

export const setUserFirstName = (firstName) => ({
    type: "setUserFirstName",
    payload: firstName,
})

export const setUserLastName = (lastName) => ({
    type: "setUserLastName",
    payload: lastName,
})

export const signOut = () => ({
    type: "signOut",
})


export default function userReducer(state = initialState, action) {
    if(action.type === "setUserConnected") {
        return {
            ...state, 
            isUserConnected: !state.isUserConnected
        }
    }
    if(action.type === "setUserEmail") {
        return {
            ...state, 
            email: state.email = action.payload
        }
    }
    if(action.type === "setUserFirstName") {
        return {
            ...state, 
            firstName: state.firstName = action.payload
        }
    }
    if(action.type === "setUserLastName") {
        return {
            ...state, 
            lastName: state.lastName = action.payload
        }
    }
    if(action.type === "signOut") {
        return {
            ...state,
            isUserConnected: false,
            firstName: '',
            lastName: '',
            email: '',
        }
    }
    return state;
}