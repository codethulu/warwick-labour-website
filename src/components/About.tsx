


import React from 'react'
import './About.css'
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
                <Element name="about" className="element"></Element>
                <div className='container'>
                    <h1 className='title'>ABOUT</h1>
                    <p>Welcome to the University of Warwick Labour Society! (Warwick Labour for short). As a society we’re committed to the aims and values of the Labour Party, to Socialism and the Liberation of all people, we fight to keep Labour true to this.

                        We’re one of the of the most active political societies in the country, holding regular events, talks and socials and campaigning heavily both on campus and throughout Warwickshire, Leamington, Coventry, Nuneaton — and further afield too.

                        We’re very friendly and love welcoming new members! So check out our Facebook page and our Facebook Discussion Group for all the latest updates, insights and to see how to get involved.</p>
                </div>

            </>


        );
    }
}
export default About;