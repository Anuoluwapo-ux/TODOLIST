import axios from 'axios';

// const baseURL = 'http://localhost:5000/api'
const baseURL = 'https://todo-fullstack-backend-nine.vercel.app/api/'

const API = axios.create({baseURL: baseURL})

API.interceptors.request.use(req => {
    if(localStorage.getItem('token')) {
        req.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }
    return req;
});

export const signUpUser = (userData) => API.post('/auth/register', userData);

export const signInUser = (userData) => API.post('/auth/login', userData);

export const createTodo = (todoData) => API.post('/todo/create', todoData);

export const deleteTodo = ( id) => API.delete(`todo/delete/${id}`);

export const allTodos = () => API.get('/todo/todos');

export const myTodos = (todoData) => API.get('/todo/mytodos', todoData);