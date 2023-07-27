import React from 'react'
import aboutgirl from '../../assets/images/aboutgirl.jpg'
import aboutgirl1 from '../../assets/images/aboutgirl480.jpg'
import aboutgirl2 from '../../assets/images/aboutgirl1309.jpg'
import aboutgirl3 from '../../assets/images/aboutgirl1891.jpg'

const About = () => {
    return (
        <>
            <div className="about">
                <div className="left">
                    <div className="content">
                        <div className="text">Live, <br /> Love,<br /> Laugh</div>
                        <div className="image">
                            <img
                                sizes="(max-width: 1860px) 100vw, 1860px"
                                srcset={`
                                    ${aboutgirl1} 480w,
                                    ${aboutgirl2} 1276w,
                                    ${aboutgirl3} 1630w,
                                    ${aboutgirl} 1860w`}
                                src={aboutgirl}
                                alt=""></img>
                        </div>
                    </div>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt amet voluptatibus molestias aperiam laudantium deleniti aliquam dolore recusandae maiores.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi accusamus, fuga dolore voluptatibus cum ullam nemo et, ipsa rerum quo dolores. Quia illo suscipit quos nostrum assumenda?</p>
                </div>
                <div className="right">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default About
