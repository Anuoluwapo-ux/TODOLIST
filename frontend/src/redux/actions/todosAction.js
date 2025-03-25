import { TODOS_TYPES } from "../types";
import * as api from '../api'


// export const todoLists = () => async dispatch => {
//     try {
//         const { data } = await api.allTodos()
//         console.log('all todos', data);
//         dispatch({
//             type:TODOS_TYPES.TODOS_LISTS,
//             payload:data.todos
//         })
//     } catch (err) {
//         console.log(err.message);
//     }
// }

export const myTodo = (todoData) => async (dispatch) => {
    try {
        const { data } = await api.myTodos(todoData)
        console.log('my todos>>>>>>>', data);

        dispatch({
            type:TODOS_TYPES.MY_TODOS,
            payload:data.todos
        })
    } catch (err) {
        console.log(err.message);
    }
}

export const createTodos = (todoData) => async dispatch => {
    try {
        const { data } = await api.createTodo(todoData)
        console.log(data.data);
        dispatch ({
            type:TODOS_TYPES.TODOS_CREATE,
            payload: data.data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const deleteTodos = (id) => async (dispatch) => {
 await api.deleteTodo( id)
  
    try {
        dispatch ({
            type:TODOS_TYPES.TODOS_DELETE,
            payload: id
        })
    } catch (err) {
        console.log(err);
    }
}