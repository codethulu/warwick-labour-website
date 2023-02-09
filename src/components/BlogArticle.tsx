


import React from 'react'
import './BlogArticle.css'


import {

    Element, Link,

} from "react-scroll";

import BlogList from '../data/BlogList';
import marked from "marked";
import Markdown from 'marked-react';

type BlogArticleProps = {

}

type BlogArticleState = {
    article: string
}

class BlogArticle extends React.Component<BlogArticleProps, BlogArticleState> {

    id = window.location.pathname.split("/")[2];

    constructor(props: any) {
        super(props);

        this.state = {
            article: ""
        }

    }

    componentDidMount(): void {
        const path = require('../data/blogs/' + this.id + '.md');

        fetch(path)
            .then(response => response.text())
            .then(text => this.setState({ article: text }));

        //print(this.state.article);
        console.log(this.state.article);
    }


    render() {
        return (
            <>
                <div className='article'>
                    <Markdown>
                        {this.state.article}
                    </Markdown>

                </div>
                <div className='footer'></div>
            </>
        );
    }


}
export default BlogArticle;