import React from 'react'
import loginimg from '../../assets/images/loginimg.png'
import Footer from '../../components/footer/Footer'
const Account = () => {
    return (
        <>
            <section className="account">
                <div className="container">
                    <h3>My Account Information</h3>
                    <div className="content">
                        <div className="left">
                            <img src={loginimg} alt="images" />
                        </div>
                        <div className="right">
                            <form>
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' />
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' />
                                <label htmlFor="password">Password</label>
                                <input type="text" id='password' />
                                <button className="btn">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Account
