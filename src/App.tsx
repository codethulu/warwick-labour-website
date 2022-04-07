import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';


import {
  Link,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Header from './components/Header';
import MainGraphic from './components/MainGraphic';
import About from './components/About';
import Exec from './components/Exec';
import Join from './components/Join';
import Footer from './components/Footer';
import Current from './components/Current';



export default class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Element name="home" className="element"></Element>
        <Header />
        <MainGraphic />
        {/* <Current /> */}
        <About />
        <Exec />
        <Join />
        <Footer />

      </ParallaxProvider>
    );
  }
}
