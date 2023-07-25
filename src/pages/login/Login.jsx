import React from 'react'
import loginimg from '../../assets/images/loginimg.png'

const Login = () => {
    return (
        <>
            <section className="login">
                <h1>Account Information</h1>
                <div className="content">
                    <div className="left">
                        <div className="image">
                            <input type="file" src={loginimg} alt='images' />
                            <img src={loginimg} alt="images" />
                        </div>
                    </div>
                    <div className="right">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' />
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' />
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' />
                        <button className="btn">Update</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
