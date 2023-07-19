import React from 'react'
import { category } from '../../assets/data/data'

const Category = () => {
    return (
        <>
            <section className="category">
                <div className="content">
                    {category.map(item => (
                        <div className="boxes" key={item.id}>
                            <div className="image">
                                <img src={item.cover} alt={item.category} />
                            </div>
                            <div className="description">
                                <h4>{item.category}</h4>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Category
