import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiImageAddLine } from 'react-icons/ri'
import { IoSettingsOutline } from 'react-icons/io5'
import { BsBagCheck } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrHelp } from 'react-icons/gr'
import { BiLogOut } from 'react-icons/bi'

const User = () => {
    const user = true;
    const [openProfile, setOpenProfile] = useState(true);
    const closeProfile = () => {
        setOpenProfile(false);
    }
    return (
        <>
            <div className="user-profile">
                {user ? (
                    <>
                        <button className='img' onClick={() => setOpenProfile(!openProfile)}>
                            <img src="https://avatars.githubusercontent.com/u/115556300?v=4" alt="user-img" />
                        </button>
                        {openProfile && (
                            <div className="open-profile box-items" onClick={closeProfile}>
                                <Link to='account'>
                                    <div className="image">
                                        <div className="img">
                                            <img src="https://avatars.githubusercontent.com/u/115556300?v=4" alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>Ayeza Bashir</h4>
                                            <p>Sargohda, Pakistan</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/create'>
                                    <button className='box'>
                                        <RiImageAddLine className='icon' />
                                        <h4>Create Post</h4>
                                    </button>
                                </Link>
                                <Link>
                                    <button className="box">
                                        <IoSettingsOutline className='icon' />
                                        <h4>My Account</h4>
                                    </button>
                                </Link>
                                <Link>
                                    <button className="box">
                                        <BsBagCheck className='icon' />
                                        <h4>My Order</h4>
                                    </button>
                                </Link>
                                <Link>
                                    <button className="box">
                                        <AiOutlineHeart className='icon' />
                                        <h4>Whishlist</h4>
                                    </button>
                                </Link>
                                <Link>
                                    <button className="box">
                                        <GrHelp className='icon' />
                                        <h4>Help</h4>
                                    </button>
                                </Link>
                                <Link>
                                    <button className="box">
                                        <BiLogOut className='icon' />
                                        <h4>Logout</h4>
                                    </button>
                                </Link>
                            </div>
                        )}
                    </>
                ) : (
                    <Link to='/login'>
                        <button>My Account</button>
                    </Link>
                )}
            </div>
        </>
    )
}

export default User
