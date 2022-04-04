import React from 'react';
import '../styles/Error.css'
import logo from '../img/Oops.png';

const Error = () => {
    return (
        <div className='container error-container'>
            <img src={logo} alt="" />
        </div>
    );
};

export default Error;