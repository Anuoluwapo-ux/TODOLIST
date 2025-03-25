import { USER_TYPES } from "../types";

const initialState = {
    users: []
}


export const users = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPES.USER_SIGNIN:
        case USER_TYPES.USER_SIGNUP:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}