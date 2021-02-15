import React from 'react';
import { Link } from 'react-router-dom';
import {FaHeart, aBars} from 'react-icons/fa';

function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="nav-logo">
                    <FaHeart className="nav-icon"/>
                    Danielle Bui
                </Link>
                    
            </div>
        </div>
        </>
    );
}

export default Navbar; 