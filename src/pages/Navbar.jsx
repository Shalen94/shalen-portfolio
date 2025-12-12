import React from 'react'
import './Navbar.css' ;
import profile1 from '../assets/profile1.jpg' ;
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
            <div className='profile'>
                <img src={profile1} alt="no image found" />
                <h1>Shalen Katta</h1>
            </div>
            <div className='tags'>
              <HashLink smooth to="/">
                <p>Home</p>
              </HashLink>
              <HashLink smooth to="/#projects">
                <p>Projects</p>
              </HashLink>
              <HashLink smooth to="/#contact">
                <p>Contact</p>
              </HashLink>
              
              
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar ;