import React, { Component } from 'react';

import './work.css'

class Work extends Component {
    state = {  }

    componentDidMount() {

        window.addEventListener( 'scroll', () => {
            
            let scrollY = window.scrollY

            let row1 = document.querySelector( '.work-row-1' )
            let row2 = document.querySelector( '.work-row-2' )
            let row3 = document.querySelector( '.work-row-3' )

            row1.style.transform = `translateX( -${ scrollY / 6 }px )`
            row2.style.transform = `translateX( ${ scrollY / 6 }px )`

        } )
    }

    render() { 
        return (
            <div id='work-component'>
                <div className="work-row work-row-1">
                    <div className="work colored1"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work colored2"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                </div>
                <div className="work-row work-row-2">
                    <div className="work"></div>
                    <div className="work colored1"></div>
                    <div className="work"></div>
                    <div className="work colored2"></div>
                    <div className="work"></div>
                    <div className="work"></div>
                    <div className="work colored1"></div>
                </div>
            </div>
        );
    }
}
 
export default Work;