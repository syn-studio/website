import React from 'react';

import './navbar.css'

const Navbar = () => {
    return (
        <div id='navbar-component' className="navbar-wrapper">
            <div className="navbar-container container">
                <div className="links-container">
                    <a href="/" className='link'>About</a>
                    <a href="/" className='link'>Work</a>
                    <a href="/" className='link'>Contact</a>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;