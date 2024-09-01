import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Img1 from "../assets/images/category/01.jpg"
import Img2 from "../assets/images/category/02.jpg"
import Img3 from "../assets/images/category/03.jpg"
import Img4 from "../assets/images/category/04.jpg"
import Img5 from "../assets/images/category/05.jpg"
import Img6 from "../assets/images/category/06.jpg"


const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: Img1,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: Img2,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: Img3,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: Img4,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: Img5,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: Img6,
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]


const HomeCategory = () => {

    return (
        <>
            <div className='category-section style-4 padding-tb'>
                <div className='container'>
                    <div className='section-header text-center'>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 100,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                },
                            }}
                            viewport={{ once: true }}
                        >
                            <span className='subtitle'>{subTitle}</span>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 100,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                },
                            }}
                            viewport={{ once: true }}
                        >
                            <h2>{title}</h2>
                        </motion.div>
                    </div>

                    {/*section card */}
                    <div className='section-wrapper'>
                        <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                            {
                                categoryList.map((val, i) => (
                                    <div key={i}>
                                        <Link to="/" className="category-item">
                                            <div className='category-inner'>
                                                <div className='category-thumb'>
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            // y: 0,
                                                            transition: {
                                                                duration: 2,
                                                            },
                                                        }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <img src={val.imgUrl} />
                                                    </motion.div>
                                                </div>

                                                {/* content */}
                                                <div className='category-content'>
                                                    <div className='cate-icon'>
                                                        <i className={`${val.iconName}`}></i>
                                                    </div>
                                                    <Link><h6>{val.title}</h6></Link>
                                                </div>

                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='text-center mt-5'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{ once: true }}
                            >
                                <Link className='lab-btn'><span>{btnText}</span></Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCategory