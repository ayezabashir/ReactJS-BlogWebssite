import React from 'react'
import loginimg from '../../assets/images/accountbg.jpg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <section className="login">
                <div className="content">
                    <div className="bgimg">
                        <img src={loginimg} alt="images" />
                        <div className="text">
                            <h3>Register</h3>
                            <h1>My Account</h1>
                        </div>
                    </div>
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' required />
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id='email' required />
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' required />
                        <button className='btn'>Register</button>
                        <Link to="/login">Login</Link>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register
