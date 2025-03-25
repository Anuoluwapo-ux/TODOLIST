import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SignUp.module.css'
import { useDispatch } from 'react-redux'
import { signUp } from '../../redux/actions/usersAction'

const SignUp = () => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const {firstName, lastName, email, password} = userData;

    const handleInputData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(userData))
        console.log(userData);
    }

    return (
        <div className={styles.container}>
            <form action="" onSubmit={handleSubmit}>
                <h3 style={{color: 'white'}}>Sign in</h3>
                <h5 style={{color: 'grey'}}>Enter details below</h5>
                <div className={styles.inputContainer}>
                    <div><input type="text" placeholder='Firstname' name='firstName' onChange={handleInputData} /></div>
                    <div><input type="text" placeholder='Lastname' name='lastName' onChange={handleInputData} /></div>
                    <div><input type="email" placeholder='E-mail' name='email' onChange={handleInputData} /></div>
                    <div><input type="password" placeholder='Password' name='password' onChange={handleInputData} /></div>
                </div>
                <div className={styles.btn}>
                    <button>Sign up</button>
                </div>
                <small>
                    <h5>Already have an account? </h5>
                    <Link to="/auth/users/sign-in">Sign in</Link>
                </small>
            </form>
        </div>
    )
}

export default SignUp
