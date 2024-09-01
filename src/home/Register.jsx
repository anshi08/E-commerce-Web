import React from 'react'
import { motion } from 'framer-motion'


const subTitle = "Save The Day"
const title = (
    <h2 className='title'>Join on Day Long Free Workshop for <b>Advance <span>Mastering</span></b> on Sales</h2>
)

const desc = "Limited Time Offer! Hurry Up"
const Register = () => {
    return (
        <>
            <section className='register-section padding-tb pb-0'>
                <div className='container'>
                    <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                        <div className='col'>
                            <div className='section-header'>
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
                                    <span className='subtitle'>{subTitle}</span>
                                    {title}
                                    <p>{desc}</p>
                                </motion.div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='section-wrapper'>
                                <motion.div

                                    initial={{
                                        opacity: 0,
                                        x: 30,
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
                                    <h4>Register Now</h4>
                                    <form className='register-form'>
                                        <input type='text' name='name' placeholder='Username' className='reg-input' />
                                        <input type='email' name='email' placeholder='Email' className='reg-input' />
                                        <input type='number' name='number' placeholder='Phone' className='reg-input' min={0} max={10} />
                                        <button type='submit' className='lab-btn'>
                                            Register Now
                                        </button>

                                    </form>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register