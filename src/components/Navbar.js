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
                  01. About me
                </Link>
              </li>

              {/*Projects link*/} 
              <li className='nav-item'>
                <Link
                  to='/projects'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  02. Projects
                </Link>
              </li>

              {/*Contact link*/}
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  03. Contact
                </Link>
              </li>

              {/*Resume button*/}
              <div className='nav-btn'>
                {button ? (
                  <Link to='/' className='btn-link'>
                    <Button buttonStyle='btn--outline'>RESUME</Button>
                  </Link>
                ) : (
                  <Link to='/' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      RESUME
                    </Button>
                  </Link>
                )}
              </div>


            </ul>
            </div>
          </nav>
          
          </IconContext.Provider>
        </>
    );
}

export default Navbar; 