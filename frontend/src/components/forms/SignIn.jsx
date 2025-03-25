import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SignIn.module.css'
import { useDispatch } from 'react-redux'
import { signIn } from '../../redux/actions/usersAction'

const SignIn = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = userData;

    const handleInputData = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(userData))
        console.log(userData);
    }

    return (
        <div className={styles.container}>
            <form action="" onSubmit={handleSubmit}>
                <h3 style={{color: 'white'}}>Sign in</h3>
                <h5 style={{color: 'grey'}}>Enter details below</h5>
                <div className={styles.inputContainer}>
                    <div><input type="email" placeholder='E-mail' name='email' onChange={handleInputData} /></div>
                    <div><input type="password" placeholder='Password' name='password' onChange={handleInputData} /></div>
                </div>
                <div className={styles.btn}>
                    <button>Sign in</button>
                </div>
                <small>
                    <h5>Don't have an account? </h5>
                    <Link to="/auth/users/sign-up">Sign up</Link>
                </small>
            </form>
        </div>
    )
}

export default SignIn
