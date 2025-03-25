import { combineReducers } from "redux";
import { todos } from "./todoReducer";
import { users } from "./userReducer";

const reducers = combineReducers({
    todos,
    users
})

export default reducers;