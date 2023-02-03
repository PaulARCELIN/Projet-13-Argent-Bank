import produce from "immer";

const initialState = {
    status: 'void',
    data: null,
    error: null,
}

const FETCHING = 'token/fetching'
const RESOLVED = 'token/resolved'
const REJECTED = 'token/rejected'
const RESET = 'token/reset'
 
export const tokenFetching = () => ({ type: FETCHING });
export const tokenResolved = (data) => ({ type: RESOLVED, payload: data });
export const tokenRejected = (error) => ({ type: REJECTED, payload: error });
export const tokenReset = () => ( {type: RESET} );


export default function fetchReducer(state = initialState, action) {
    return produce(state, draft => {
        switch(action.type) {
            case FETCHING: {
                if(draft.status === 'void') {
                    draft.status = 'pending';
                    return;
                }
                if(draft.status === 'rejected') {
                    draft.error = 'null';
                    draft.status = 'pending';
                    return;
                }
                if(draft.status === 'resolved'){
                    draft.status = 'updating'
                    return;
                }
                return;
            }
            case RESOLVED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.data = action.payload
                    draft.status = 'resolved'
                    return;
                }
                return;
            }
            case REJECTED: {
                if(draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.data = null
                    draft.status = 'rejected'
                    return
                }
                return
            }
            case RESET: {
                draft.status = 'void'
                draft.data = null
                draft.error = null
                return
            }
            default: 
                return
        }
    })
}