import React, { Component } from 'react';

import './globals.css'

import Navbar from './components/Navbar/Navbar'

class SynStudio extends Component {
    state = {  }
    render() { 
        return (
            <div className='page-container'>
                <Navbar />
                <div>
                    <h1>We build your vision</h1>
                </div>
            </div>
        );
    }
}
 
export default SynStudio;