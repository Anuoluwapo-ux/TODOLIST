import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { user } from '../Authentication'

const Header = () => {
    const handleLogout = () => {
        localStorage.clear()
        window.location.href = '/auth/users/sign-up';
    }
    return (
        <>
            {user ? (
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>ToDo-List</h1>
                    </div>
                    <div className={styles.btn}>
                        <Link to='/auth/users/sign-up'><button className={styles.fbtn} onClick={handleLogout}>Log out</button></Link>
                    </div>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>ToDo-List</h1>
                    </div>
                    <div className={styles.btn}>
                        <Link to='/auth/users/sign-up'><button className={styles.fbtn}>Sign up</button></Link>
                        <Link to='/auth/users/sign-in'><button className={styles.sbtn}>Sign in</button></Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header
