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



export default class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Element name="home" className="element"></Element>
        <Header />
        <MainGraphic />
        <About />

      </ParallaxProvider>
    );
  }
}

