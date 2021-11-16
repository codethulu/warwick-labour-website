import React from 'react'
import './Header.css'

import {
    Link,
    Element,
    Events,
    animateScroll,
    scrollSpy,
    scroller
} from "react-scroll";

class Header extends React.Component {


    render() {
        return (
            <div>

                <div className={`nav-sticky text-sm sm:text-2xl`}>


                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-120} duration={750} >
                        <a className={`nav-title hover-underline-animation`}> HOME</a>
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={750} >
                        <a className='nav-title hover-underline-animation'>ABOUT</a>
                    </Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={750} >
                        <a className='nav-title hover-underline-animation'>JOIN US</a>
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={750} >
                        <a className='nav-title hover-underline-animation'>CONTACT</a>
                    </Link>




                </div>


            </div>
        );
    }
}
export default Header;