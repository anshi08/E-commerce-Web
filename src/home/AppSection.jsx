import React from 'react'
import { Link } from 'react-router-dom'
import App1 from "../assets/images/app/01.jpg"
import App2 from "../assets/images/app/02.jpg"
import { motion } from 'framer-motion'


const btnText = "Sign up for free"
const title = 'Shop Anytime, Anywhere'
const desc = "Take shop on your any device with our app & learn all time what you want. Just download & install & start to learn"


const AppSection = () => {
  return (
    <>
      <div className='app-section padding-tb'>
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
               <Link to={"/"} className='lab-btn mb-4'>{btnText}</Link>
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
               <h2 className='title'>{title}</h2>
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
               <p>{desc}</p>
               </motion.div>
            </div>

            <div className='section-wrapper'>
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
                 <ul className='lab-ul'>
                
                   <li>
                    <a href='#'><img src={App1}/></a>
                   </li>
                   
                   <li>
                   <a href='#'><img src={App2}/></a>
                   </li>
                   
                 </ul>
                 </motion.div>
                </div>

        </div>

      </div>
    </>
  )
}

export default AppSection