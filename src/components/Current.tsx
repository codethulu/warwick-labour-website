


import React from 'react'
import './Current.css'
import { ParallaxBanner } from 'react-scroll-parallax';
import p1 from '../images/parallax-1.png';
import p2 from '../images/parallax-2.png';
import p3 from '../images/parallax-3.png';

import {

    Element,

} from "react-scroll";

class About extends React.Component {


    render() {
        return (

            <>
                <div className='about'>
                    <h1 className='title'>THE LATEST</h1>
                    <div className='latest-feed'>
                        <div className='latest-block l-1'></div>
                        <div className='latest-block l-3'></div>
                    </div>

                </div>

            </>


        );
    }
}
export default About;