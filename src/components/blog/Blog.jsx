import React from 'react'
import { cards } from '../../assets/data/data'
import { AiOutlineComment, AiOutlineShareAlt, AiOutlineTags } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <>
            <section className="blog">
                <div className="container grid3">
                    {cards.map(item => (
                        <div className="box box-items" key={item.id}>
                            <div className="image">
                                <img loading='lazy' src={item.cover} alt="" />
                            </div>
                            <div className="description">
                                <div className="tag">
                                    <AiOutlineTags className='icon' />
                                    <a href="/">#{item.category}</a>
                                </div>
                                <Link to={`/details/${item.id}`} className='link'>
                                    <h3>{item.title}</h3>
                                </Link>
                                <p>{item.desc.slice(0, 150)}...</p>
                                <div className="date">
                                    <AiOutlineClockCircle className='icon' />
                                    <label htmlFor="">{item.date}</label>
                                    <AiOutlineComment className='icon' />
                                    <label htmlFor="">{item.comments}</label>
                                    <AiOutlineShareAlt className='icon' />
                                    <label htmlFor="">Share</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blog
