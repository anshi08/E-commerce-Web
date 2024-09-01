import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Img from "../assets/images/about/01.png"
import { motion } from 'framer-motion';

const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
  {
    iconName: 'icofont-users-alt-4',
    count: '12600',
    text: 'Marchant Enrolled',
  },
  {
    iconName: 'icofont-graduate-alt',
    count: '30',
    text: 'Certified Courses',
  },
  {
    iconName: 'icofont-notification',
    count: '100',
    text: 'Rewards and GitCards',
  },
]


const AboutUs = () => {
  return (
    <>
      <div className='instructor-section style-2 padding-tb section-bg-ash'>
        <div className='container'>
          <div className='section-wrapper'>
            <div className='row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2
              row-cols-xl-3 '>
              <div className='col'>
                {
                  countList.map((count, i) => (
                    <div key={i} className='count-item'>
                      <div className='count-inner'>
                        <div className='count-icon'>
                          <motion.div
                            initial={{
                              opacity: 0,
                              x: -30,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 1,
                              },
                            }}
                            viewport={{ once: true }}
                          >
                            <i className={count.iconName}></i>
                          </motion.div>
                        </div>

                        <div className='count-content'>
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
                            <h2><span className='count'><CountUp end={count.count} /></span>
                              <span>+</span>
                            </h2>
                            <p>{count.text}</p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>

              <div className='col'>
                <div className='instructor-content'>
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
                    <Link to={"/"} className='lab-btn'>{btnText}</Link>
                  </motion.div>

                </div>
              </div>

              <div className='col'>
                <div className='instructor-thumb'>
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
                    <img src={Img} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs