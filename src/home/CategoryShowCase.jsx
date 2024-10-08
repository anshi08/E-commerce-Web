import React, { useState } from 'react'
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import Category1 from "../assets/images/categoryTab/01.jpg"
import Category2 from "../assets/images/categoryTab/02.jpg"
import Category3 from "../assets/images/categoryTab/03.jpg"
import Category4 from "../assets/images/categoryTab/04.jpg"
import Category5 from "../assets/images/categoryTab/05.jpg"
import Category6 from "../assets/images/categoryTab/06.jpg"
import Category7 from "../assets/images/categoryTab/07.jpg"
import Category8 from "../assets/images/categoryTab/08.jpg"


const title = "Our Products";

const ProductData = [
    {
        imgUrl: Category1,
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: Category2 ,
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: Category3,
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: Category4,
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: Category5,
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: Category6,
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: Category7,
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: Category8,
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
]


const CategoryShowCase = () => {

    const [items, setItems] = useState(ProductData)

    const filterItem = (cateItem) => {
        const updateItems = ProductData.filter((curEle) => {
            return curEle.cate === cateItem
        })

        setItems(updateItems)
    }

    return (
        <>
            <div className='course-section style-3 padding-tb'>
                <div className='course-shape one'>
                    <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
                </div>
                <div className='course-shape two'>
                    <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
                </div>

                {/* main section */}
                <div className='container'>
                    <div className='section-header'>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 50,
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
                            <h2 className='title'>{title}</h2>
                        </motion.div>
                        <div className='course-filter-group'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 50,
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
                                <ul className='lab-ul'>
                                    <li onClick={() => setItems(ProductData)}>All</li>
                                    <li onClick={() => filterItem("Shoes")}>Shoes</li>
                                    <li onClick={() => filterItem("Bags")}>Bags</li>
                                    <li onClick={() => filterItem("Phones")}>Phones</li>
                                    <li onClick={() => filterItem("Beauty")}>Beauty</li>
                                </ul>
                            </motion.div>
                        </div>


                    </div>

                    {/* section body */}
                    <div className='section-wrapper'>
                        <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1
                        course-filter'>
                            {
                                items.map((ele) => <div key={ele.id} className='col'>
                                    <div className='course-item style-4'>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 60,
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
                                            <div className='course-inner'>
                                                <div className='course-thumb'>
                                                    <img src={ele.imgUrl} />
                                                    <div className='course-category'>
                                                        <div className='course-cate'>
                                                            <a href='#'>{ele.cate}</a>
                                                        </div>

                                                        <div className='course-reiew'>
                                                            <Rating />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* content */}
                                                <div className='course-content'>
                                                    <Link to={"/"}><h6>{ele.title}</h6></Link>

                                                    <div className='course-footer'>
                                                        <div className='course-author'>
                                                            <Link to={"/"}>{ele.brand}</Link>
                                                        </div>

                                                        <div className='course-price'>
                                                            {ele.price}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </motion.div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryShowCase