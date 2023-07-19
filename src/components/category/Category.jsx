import React from 'react'
import { category } from '../../assets/data/data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr'

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='next'>
                <MdNavigateNext className='icon' />
            </button>
        </div>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='prev'>
                <GrFormPrevious className='icon' />
            </button>
        </div>
    )
}

const Category = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="category">
                <div className="content">
                    <Slider {...settings}>
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
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Category
