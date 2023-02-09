


import React from 'react'
import './Blog.css'


import {

    Element, Link,

} from "react-scroll";

import BlogList from '../data/BlogList';


class Blog extends React.Component {

    constructor(props: any) {
        super(props);

    }

    blogClick(e: string, c: any) {
        console.log(e);
        window.location.href = '/blog/' + e;
    }



    render() {
        return (

            <>

                <div className='blog-banner'>
                    <h1 >Catch up with Warwick Labour.</h1>
                </div>

                <div className='blog-card-container'>
                    {

                        BlogList.reverse().map((e) => {
                            return (
                                <div className='blog-card-outer' onClick={(c) => this.blogClick(e.file, c)}>
                                    <div className='blog-card' style={{ backgroundColor: e.colour, color: e.textColour }}>


                                        <h1 style={{ color: e.textColour }}>{e.title}</h1>
                                        <div className='blog-card-footer'>
                                            <h2 style={{ color: e.textColour }}>{e.author}</h2>
                                            <h3 style={{ color: e.textColour }}>{e.date}</h3>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </>


        );
    }


}
export default Blog;