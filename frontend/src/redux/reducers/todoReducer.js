import { TODOS_TYPES } from '../types';
// import { v4 as uuid } from 'uuid'

const initialState = {
    todos: [
        // {
        //     id: uuid(),
        //     text: 'watch the car',
        //     noteDate: new Date().toLocaleString()
        // },
        // {
        //     id: uuid(),
        //     text: 'watch the plate',
        //     noteDate: new Date().toLocaleString()
        // },
        // {
        //     id: uuid(),
        //     text: 'watch the bike',
        //     noteDate: new Date().toLocaleString()
        // },
        // {
        //     id: uuid(),
        //     text: 'watch the wheel',
        //     noteDate: new Date().toLocaleString()
        // },
    ]
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case TODOS_TYPES.MY_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case TODOS_TYPES.TODOS_CREATE:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TODOS_TYPES.TODOS_DELETE:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.payload)
            }
        default:
            return state;
    }
}