import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = ()=> setClick(!click); 
    const closeMobileMenu = ()=> setClick(false);

    const showButton = ()=>{
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
    window.addEventListener('resize', showButton);


    return (
        <div>
            <nav className="navbar">
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              BuildForWeb
              <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' >
              <i className={'fas fa-shopping-cart'} />
              <i onClick={handleClick} className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
              <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                    Projects
                </Link>
              </li>
              <li className='nav-item'>
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
                </Link>
              </li>
              <li className='nav-item'>
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact
                </Link>
              </li>
            </ul>
 
          </div>
        </nav>
        </div>
    );
}

export default Navbar
