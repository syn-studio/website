import React from 'react';

import './mainhero.css'
import logo from './../../assets/logo.svg'
import Navbar from '../Navbar/Navbar';

const MainHero = () => {
    return (
        <div id='main-hero-component'>
            <div className='container'>
                <Navbar />
                <div className="cta-container">
                    <img src={ logo } alt="syn studio logo"/>
                    <a href="/" className='link link-colored-box main-cta'>Get in touch →</a>
                </div>
            </div>
        </div>
    );
}
 
export default MainHero;