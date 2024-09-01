import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo/logo (1).png"

const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true)
        } else {
            setHeaderFixed(false)
        }
    })
    return (
        <>
            <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
                <div className={`header-top d-md-none`}>
                    <div className='container'>
                        <div className='header-top-area'>
                            <Link to="/" className='lab-btn me-3'>
                                <span>Create Account</span>
                            </Link>

                            <Link to="/" className='lab-btn'>
                                <span>Log In</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* header Bottom */}
                <div className='header-bottom'>
                    <div className='container'>
                        <div className='header-wrapper'>
                            {/* Logo */}
                            <div className='logo-search-acte'>
                                <div className='logo'>
                                    <Link to="/">
                                        <img src={Logo} />
                                    </Link>
                                </div>

                            </div>

                            {/* menu area */}
                            <div className='menu-area'>
                                <div className='menu'>
                                    <ul className={`lab-ul ${menuToggle ? 'active' : ""}`}>
                                        <li>
                                            <Link to={"/"}>Home</Link>
                                            <Link to={"/"}>Shop</Link>
                                            <Link to={"/"}>About</Link>
                                            <Link to={"/"}>Contact Us</Link>
                                        </li>
                                    </ul>


                                </div>

                                {/* Sign In && Login Btn */}

                                <Link to={"/"} className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                                <Link to={"/"} className='d-none d-md-block'>Log In</Link>
                            
                            {/* menu Toggler */}
                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            </div>


                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Navbar