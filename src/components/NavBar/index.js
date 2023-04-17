import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
    <>
      <div className='divider'>
        
      </div>
      <div className='nav'>
        <ul>
          <li style = {{marginBottom :'7vh'}}>
        <NavLink to="/"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : 'black',
            background: isActive ? 'black' : 'none',
            textDecoration: 'none',
            // fontSize : isActive ? '36px' : '24px',
            marginBottom : '7vh'
          })}>
          Home
        </NavLink>
          </li>
          <li style = {{marginBottom :'7vh'}}>
        <NavLink to="/Projects"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#000000',
            background: isActive ? 'black' : 'none',
            textDecoration: 'none',
            // fontSize : isActive ? '36px' : '24px',
            marginBottom : '7vh',
          })} >Projects </NavLink>
        </li>
        <li style = {{marginBottom :'7vh'}}>

        <NavLink to="/About"
          style={({ isActive }) => ({ 
            color: isActive ? '#fff' : 'black',
            background: isActive ? 'black' : 'none',
            textDecoration: 'none',
            // fontSize : isActive ? '36px' : '24px',
            marginBottom : '7vh',
          })}
          >
          About
        </NavLink>

        </li>
        <li style = {{marginBottom :'7vh'}}>
        

        <NavLink to="/Game"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : 'black',
            background: isActive ? 'black' : 'none', 
            textDecoration: 'none',
            // fontSize : isActive ? '36px' : '24px',
            
          })}>
          Game</NavLink>
        </li>
          </ul>
      </div>
    </>
  )
}

export default NavBar
