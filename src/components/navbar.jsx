import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    const { menuClass, menuHeading } = props;
    return (
        <div className="mainMenu">
            {menuHeading ? <h4>{menuHeading}</h4> : ''}
            <ul className={`list ${menuClass ? menuClass : ''}`}>
                <li><NavLink to="/" exact >Home</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/cars">Cars</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
