import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                    <li><Link className="nav-link" to='/'>HOME</Link> </li>
                    <li><Link className="nav-link" to='/reviews'>REVIEWS</Link> </li>
                    <li><Link className="nav-link" to='/dashboard'>DASHBOARD</Link> </li>
                    <li><Link className="nav-link" to='/blogs'>BLOGS</Link> </li>
                    <li><Link className="nav-link" to='/about'>ABOUT</Link> </li>
            </ul>
        </nav>
    );
};

export default Nav;