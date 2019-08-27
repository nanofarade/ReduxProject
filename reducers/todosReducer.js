import { LOADING_DATA_PENDING, LOADING_DATA_SUCCESS, LOADING_DATA_FAILURE } from "../types/types";

const INITIAL_STATE = {
    loading: false,
    todos: [],
    x:10
}


export const TodosReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOADING_DATA_PENDING:
            return { ...state, loading: true }
        case LOADING_DATA_SUCCESS:
            return { ...state, loading: false,todos:action.payload }
        case LOADING_DATA_FAILURE:
            return { ...state, loading: false }
        default:
            return state
    }


}