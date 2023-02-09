import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './Header.css'

import {
    Link,
    Element,
    Events,
    animateScroll,
    scrollSpy,
    scroller
} from "react-scroll";

export class Header extends React.Component {

    warn() {
        alert("We're working on our blog page, keep an eye out on our social media for updates!")
    }

    homeDirect() {
        window.location.href = '/';
    }

    blogDirect() {
        console.log("ok");
        window.location.href = '/blog';
    }


    render() {
        return (
            <div>

                <div className={`nav-sticky`}>


                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-0} duration={750} >
                        <a className={`nav-title hover-underline-animation`}> HOME</a>
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={750} >
                        <a className='nav-title hover-underline-animation'>ABOUT</a>
                    </Link>
                    <Link activeClass="active" to="exec" spy={true} smooth={true} offset={0} duration={750} >
                        <a className='nav-title hover-underline-animation'>EXEC</a>
                    </Link>
                    <Link activeClass="active" to="join" spy={true} smooth={true} offset={0} duration={750} >
                        <a className='nav-title hover-underline-animation'>JOIN US</a>
                    </Link>
                    {/* <Link activeClass="active" to="join" spy={true} smooth={true} offset={0} duration={750} >
                        <a className='nav-title hover-underline-animation'>BLOG</a>
                    </Link> */}
                    <a onClick={this.blogDirect} className='nav-title hover-underline-animation'>BLOG</a>
                    {/* <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={750} >
                        <a className='nav-title hover-underline-animation'>CONTACT</a>
                    </Link> */}




                </div>


            </div>
        );
    }
}

export class BlogHeader extends React.Component {

    warn() {
        alert("We're working on our blog page, keep an eye out on our social media for updates!")
    }

    homeDirect() {
        window.location.href = '/';
    }

    blogDirect() {
        console.log("ok");
        window.location.href = '/blog';
    }


    render() {
        return (
            <div>

                <div className={`nav-sticky`}>



                    <a onClick={this.homeDirect} className={`nav-title hover-underline-animation`}> HOME</a>


                    <a onClick={this.blogDirect} className='nav-title hover-underline-animation'>BLOG</a>





                </div>


            </div>
        );
    }
}
