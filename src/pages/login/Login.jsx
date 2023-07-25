import React from 'react'
import loginimg from '../../assets/images/accountbg.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <section className="login">
                <div className="content">
                    <div className="bgimg">
                        <img src={loginimg} alt="images" />
                        <div className="text">
                            <h3>Login</h3>
                            <h1>My Account</h1>
                        </div>
                    </div>
                    <form>
                        <label htmlFor="username">Username or Email address</label>
                        <input type="text" id='username' required />
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' required />
                        <button className='btn'>Login</button>
                        <Link to="/register">Register</Link>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login
