import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js'

import './mainhero.css'
import logo from './../../assets/logo.svg'
import Navbar from '../Navbar/Navbar';


class MainHero extends Component {

    state = {  }

    componentDidMount() {
        let circle = document.querySelector( '.circle' )

        // window.addEventListener( 'mousemove', ( e ) => {
        //     circle.style.left = e.clientX + 'px'
        //     circle.style.top = e.clientY + 'px'
        // } )
    }

    render() { 
        return (
            <div id='main-hero-component'>
                <div className="main-hero-wrapper">
                    {/* <div className="circle"></div> */}
                    <div className='container'>
                        <Navbar />
                        <div className="cta-container">
                            <img src={ logo } alt="syn studio logo"/>
                            <a href="/" className='link link-colored-box main-cta'>Get in touch <span>→</span></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

 
export default MainHero;