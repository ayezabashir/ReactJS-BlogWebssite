import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cards } from '../../assets/data/data'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'

const Details = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        let blogs = cards.find((blogs) => blogs.id === parseInt(id));
        if (blogs) {
            setBlogs(blogs)
        }
    }, [id])

    return (
        <>
            {blogs ? (
                <section className="single-post">
                    <div className="container">
                        <div className="left">
                            <h1>{blogs.title}</h1>
                            <p className='desc'>{blogs.desc}</p>
                            <img src={blogs.cover} alt="" />
                        </div>
                        <div className="right">
                            <div className="buttons">
                                <button className="btn">
                                    <BsPencilSquare />
                                </button>
                                <button className="btn">
                                    <AiOutlineDelete />
                                </button>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, eaque. Ad incidunt, dolore impedit corrupti, rerum expedita ex autem minus ratione fugiat veritatis ut natus nulla totam, quasi repudiandae nesciunt itaque eaque. Distinctio laudantium quibusdam animi consectetur facilis eos molestias sunt. Et, dolorem quos delectus cupiditate voluptatibus ex iste aliquid autem in nihil asperiores quis nam, natus libero quibusdam. Inventore odio ratione magnam ea. Consectetur voluptatem hic quaerat doloribus similique accusantium adipisci placeat dicta, quam possimus doloremque non!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio quam esse corporis, tenetur numquam ex itaque? Nulla rerum culpa corporis voluptatem facilis fugiat architecto quibusdam laborum porro id ex, hic vero ea optio repellendus quasi quam?</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam corporis vero deleniti at omnis quasi vitae eius consectetur ducimus obcaecati recusandae distinctio, repellat, dicta fugit. Animi nihil obcaecati non repellendus omnis saepe quas pariatur minima, rerum fugit placeat doloremque amet commodi dicta asperiores voluptatum aut eos aspernatur! Suscipit dolores itaque ab est mollitia ipsa animi voluptatum.</p>
                        </div>
                    </div>
                </section>
            ) : null
            }
        </>
    )
}

export default Details
