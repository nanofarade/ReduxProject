import { LOADING_DATA_PENDING, LOADING_DATA_SUCCESS, LOADING_DATA_FAILURE } from "../types/types";

const INITIAL_STATE = {
    loading:false,
    // username:'default',
    users: [],
    // password: 'default',
    msg: 'default',
}


export const UsersReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOADING_DATA_PENDING:
            return { ...state, loading: true }
        case LOADING_DATA_SUCCESS:
            return { ...state, loading: false,users:action.payload }
        case LOADING_DATA_FAILURE:
            return { ...state, msg: "there has been an error. Excuse us." }
        default:
            return state
    }


}