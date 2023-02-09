import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import {
  Link,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";
import { Header, BlogHeader } from './components/Header';
import MainGraphic from './components/MainGraphic';
import About from './components/About';
import Exec from './components/Exec';
import Join from './components/Join';
import Footer from './components/Footer';

import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';

import Current from './components/Current';
import { render } from '@testing-library/react';



export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogArticlePage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

const Main = () => {
  return (
    <>
      <Element name="home" className="element"></Element>
      <Header />
      <ParallaxProvider>
        <MainGraphic />
        {/* <Current /> */}
        <About />
        <div className='divider' />
        <Exec />
        <div className='divider' />
        <Join />
        <Footer />

      </ParallaxProvider >
    </>
  );
}

const BlogPage = () => {
  return (
    <>
      <BlogHeader />
      <Blog />
    </>
  );
}

const BlogArticlePage = () => {

  //get the id from the url
  return (
    <>
      <BlogHeader />
      <BlogArticle />
    </>
  );
}