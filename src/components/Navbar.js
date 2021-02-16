import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {FaHeart, FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  

    return (
        <>
          <IconContext.Provider value={{ color: '#fff' }}>
            
          <nav className="navbar">


            {/* Logo Navbar TODO: Create logo */}
              <div className='navbar-container container'>
                  <Link to='/' className="navbar-logo"  onClick={closeMobileMenu}>
                      <FaHeart className="navbar-icon"/>
                  </Link>         


          {/*Hamburger icon (When screen size smaller)*/}
              <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
            
            {/*navigation */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>


              {/*About link*/}
              <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                <p style={{color: 'red'}}>01.</p>
                About me
                </Link>
              </li>

              {/*Projects link*/} 
              <li className='nav-item'>
                <Link
                  to='/projects'
                  className='nav-links'
                  onClick={closeMobileMenu}>
                    <p style={{color: 'red'}}>02.</p>
                  Projects
                </Link>
              </li>

              {/*Contact link*/}
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <p style={{color: 'red'}}>03.</p>
                  Contact
                </Link>
              </li>

            </ul>
            </div>
          </nav>
          
          </IconContext.Provider>
        </>
    );
}

export default Navbar; 