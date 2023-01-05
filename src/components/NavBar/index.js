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
        <NavLink to="/"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
            fontSize : '26px',
            marginBottom : '5vh'
          })}>
          Home
        </NavLink>
        <NavLink to="/Projects"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
            fontSize : '26px',
            marginBottom : '5vh',
          })} >
          Projects
        </NavLink>
        <NavLink to="/About"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
            fontSize : '26px',
            marginBottom : '5vh',
          })}
        >
          About Me
        </NavLink>
        <NavLink to="/Contact"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
            fontSize : '26px',
            marginBottom : '5vh',
          })}> Contact Me </NavLink>
      </div>
    </>
  )
}

export default NavBar
