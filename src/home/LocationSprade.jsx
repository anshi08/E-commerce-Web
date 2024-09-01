import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Avatar from "../assets/images/clients/avater.jpg"


const title = "More Then 60,000 Customers"

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
   {
      imgUrl: Avatar,
      imgAlt: 'education thumb rajibraj91 rajibraj',
      text: 'Join with Us',
   },
   {
      imgUrl: Avatar,
      imgAlt: 'education thumb rajibraj91 rajibraj',
      text: 'Join with Us',
   },
   {
      imgUrl: Avatar,
      imgAlt: 'education thumb rajibraj91 rajibraj',
      text: 'Join with Us',
   },
   {
      imgUrl: Avatar,
      imgAlt: 'education thumb rajibraj91 rajibraj',
      text: 'Join with Us',
   },
   {
      imgUrl: Avatar,
      imgAlt: 'education thumb rajibraj91 rajibraj',
      text: 'Join with Us',
   },
   {
      imgUrl: Avatar,
      imgAlt: 'education thumb rajibraj91 rajibraj',
      text: 'Join with Us',
   },
   {
      imgUrl: Avatar,
      imgAlt: 'education thumb rajibraj91 rajibraj',
      text: 'Join with Us',
   },
]

const LocationSprade = () => {
   return (
      <>
         <div className='clients-section style-2 padding-tb'>
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

               {/* main content */}
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
                  <div className='section-wrapper'>
                     <div className='clients'>
                        {
                           clientsList.map((client, i) => (
                              <div key={i} className='client-list'>
                                 <Link to={"/"} className='client-content'>
                                    <span>{client.text}</span>
                                 </Link>
                                 <div className='client-thumb'>
                                    <img src={client.imgUrl} />
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </>
   )
}

export default LocationSprade