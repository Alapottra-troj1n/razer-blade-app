import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Nav.css'

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                    <li><NavLink activeClassName="active" className="nav-link" to='/'>HOME</NavLink> </li>
                    <li><NavLink activeClassName="active" className="nav-link" to='/reviews'>REVIEWS</NavLink> </li>
                    <li><NavLink activeClassName="active" className="nav-link" to='/dashboard'>DASHBOARD</NavLink> </li>
                    <li><NavLink activeClassName="active" className="nav-link" to='/blogs'>BLOGS</NavLink> </li>
                    <li><NavLink activeClassName="active" className="nav-link" to='/about'>ABOUT</NavLink> </li>
            </ul>
        </nav>
    );
};

export default Nav;