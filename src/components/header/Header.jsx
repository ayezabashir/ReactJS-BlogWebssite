import React from 'react'
import logo from '../../assets/images/logo.png'
import { navdata } from '../../assets/data/data'
import { Link } from 'react-router-dom'
import User from './User'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" width='100px' />
                </div>
                <nav>
                    <ul>
                        {navdata.map((link) => (
                            <li key={link.id}>
                                <Link to={link.url}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="user-account">
                    <User />
                </div>
            </div>
        </header>
    )
}

export default Header
