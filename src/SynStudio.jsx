import React, { Component } from 'react';

import './globals.css'

import MainHero from './components/MainHero/MainHero';
import InitialLoad from './components/InitialLoad/InitialLoad';
import WeAre from './components/WeAre/WeAre';
import Footer from './components/Footer/Footer';
// import TheProcess from './components/TheProcess/TheProcess';
import BigDownArrow from './components/BigDownArrow/BigDownArrow';
import Work from './components/Work/Work';

class SynStudio extends Component {


    state = {  }
    render() { 
        return (
            <div className='page-container'>
                {/* <InitialLoad /> */}
                <MainHero />
                <BigDownArrow />
                <WeAre />
                <Work />
                <Footer />
            </div>
        );
    }
}
 
export default SynStudio;