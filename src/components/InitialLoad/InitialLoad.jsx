import React, { Component } from 'react';

import './initialload.css'
import logo from './../../assets/logo-white.svg'

class InitialLoad extends Component {
    state = {  }
    render() { 
        return (
            <div id='initial-load-component'>
                <img src={ logo } alt="syn studio logo"/>
                <div className="left"></div>
                <div className="right"></div>
            </div>
        );
    }
}
 
export default InitialLoad;