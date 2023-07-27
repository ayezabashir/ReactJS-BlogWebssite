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
                            <Link to={`/details/${item.id}`} >
                                <div className="image">
                                    <img
                                        sizes="(max-width: 7000px) 40vw, 2800px"
                                        srcset={`
                                                ${item.res1} 480w,
                                                ${item.res2} 1309w,
                                                ${item.res3} 1891w,
                                                ${item.res4} 2365w,
                                                ${item.res5} 2800w`}
                                        src={item.cover}
                                        alt=""></img>
                                </div>
                                <div className="description">
                                    <div className="tag">
                                        <AiOutlineTags className='icon' />
                                        <a href="/">#{item.category}</a>
                                    </div>
                                    <h3 className='link'>{item.title}</h3>
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
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blog
