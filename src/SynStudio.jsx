import React, { Component } from 'react';

import './globals.css'

import MainHero from './components/MainHero/MainHero';
import InitialLoad from './components/InitialLoad/InitialLoad';
import WeAre from './components/WeAre/WeAre';
import Footer from './components/Footer/Footer';

class SynStudio extends Component {
    state = {  }
    render() { 
        return (
            <div className='page-container'>
                {/* <InitialLoad /> */}
                <MainHero />
                <WeAre />
                <Footer />
            </div>
        );
    }
}
 
export default SynStudio;