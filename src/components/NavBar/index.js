import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
  <>
    <div className='divider'>
      ----
    </div>
    <div className='nav'>
       <NavLink to="/" > Home </NavLink> 
       <NavLink to="/Projects" >Projects </NavLink>
       <NavLink to="/About" > About Me </NavLink> 
       <NavLink to="/Contact" > Contact Me </NavLink> 
    </div>
  </>
  )
}

export default NavBar
