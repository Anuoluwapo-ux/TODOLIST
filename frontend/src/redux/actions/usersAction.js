import { toast } from 'react-toastify'
import { USER_TYPES } from "../types"
import * as api from '../api'

export const signIn = (userData) => async (dispatch) => {
    try {
        const { data } = await api.signInUser(userData)
        dispatch({
            type: USER_TYPES.USER_SIGNIN,
            payload: data.user
        })
        console.log('User Data =>>>', data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user))
        toast.success(data.message)
        window.location.href = '/'
    } catch (err) {
        console.log(err.message);
        if (err.response && err.response.data) {
            toast.error(err.response.data.message)
        }
    }
}

export const signUp = (userData) => async (dispatch) => {
    try {
        const { data } = await api.signUpUser(userData)
        dispatch({
            type: USER_TYPES.USER_SIGNUP,
            payload: data
        })
        console.log('User Data =>>>', data);
        toast.success(data.message)
        window.location.href = '/auth/users/sign-in'
    } catch (err) {
        console.log(err.message);
        if (err.response && err.response.data) {
            toast.error(err.response.data.message)
        }
    }
}