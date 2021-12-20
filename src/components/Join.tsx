


import React from 'react'
import './Join.css'


import {

    Element,

} from "react-scroll";

class Join extends React.Component {


    render() {
        return (

            <>
                <Element name="join" className="element"></Element>
                <div className='join'>

                    <h1 className='scaled-title'>WANT TO GET INVOLVED?</h1>
                    <p>Joining the society is the easiest way to keep up with what the society is doing. Doing so is <strong>FREE</strong> through the SU! Join to get involved in our campaigns, our socials to meet other left wing students on campus, and the wider labour community in the Warwick/Coventry area! The society is great for listening to exclusive speakers and getting involved in campaigns that matter and getting real political experience.</p>
                    <a href='https://www.warwicksu.com/shop/product/1785/'><div className='join-button'></div></a>

                    <div className='social-container'>
                        <a href='https://www.facebook.com/WarwickLabour/'><div className='social-button facebook'></div></a>
                        <a href='https://twitter.com/warwicklabour'><div className='social-button twitter'></div></a>
                        <a href='http://instagram.com/warwicklabour'><div className='social-button instagram'></div></a>
                        <a href='https://discord.gg/YyfVtdZQKM'><div className='social-button discord'></div></a>
                    </div>
                    <p>We also post our events on our socials, so please consider following them to get convenient updates and news!
                        Any other questions, issues or suggestions? You are welcome to message us on any of our social media platforms listed above, or you can email us!</p>
                    <p>General Inquiries: <a className='email-link' href="mailto: labourwarwick@gmail.com">labourwarwick@gmail.com</a></p>
                    <p>Technical Issues: <a className='email-link' href="mailto: brendan@codethulu.dev">brendan@codethulu.dev</a></p>


                </div>
            </>


        );
    }
}
export default Join;