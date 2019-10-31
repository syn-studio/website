import React, { Component } from 'react';

import './bigdownarrow.css'

class BigDownArrow extends Component {
    state = {  }

    componentDidMount() {
        
        let arrowComponent = document.querySelector( '#big-down-arrow-component' )
        let heroWrapper = document.querySelector( '.main-hero-wrapper' )

        // 60 is from border width
        arrowComponent.style.height = heroWrapper.offsetHeight + 50 + 'px'
        arrowComponent.style.bottom = heroWrapper.offsetHeight + 'px'

        setTimeout(() => {
            arrowComponent.style.height = heroWrapper.offsetHeight + 50 + 70 + 'px'
        }, 1000 )


    }

    render() { 
        return (
            <div id='big-down-arrow-component'>
                <div className="arrow-shaft"></div>
                <div className="arrow-tip"></div>
            </div>
        );
    }
}
 
export default BigDownArrow;