import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'
import { category } from '../../assets/data/data'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
const Categories = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        let categories = category.find((categories) => categories.id === parseInt(id));
        if (categories) {
            setCategories(categories)
        }
    }, [id])
    return (
        <>
            {categories ? (
                <>
                    <section className="single-post">
                        <div className="container">
                            <div className="left">
                                <h1>{categories.title}</h1>
                                <p>#{categories.category}</p>
                                <img src={categories.cover} alt="" />
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
                    <Footer />
                </>
            ) : null
            }
        </>
    )
}

export default Categories
