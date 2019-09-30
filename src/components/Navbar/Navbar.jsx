import React from 'react';

import './navbar.css'

const Navbar = () => {
    return (
        <div id='navbar-component' className="navbar-wrapper">
            <div className="navbar-container container">
                <div className="logo-area">
                    <h1>Syn Studio</h1>
                </div>
                <div className="links-container">
                    <a href="/">About</a>
                    <a href="/">Work</a>
                    <a href="/">Contact</a>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;