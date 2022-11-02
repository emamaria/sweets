import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='navbar__menu'>
            <NavLink to="/">Home</NavLink>
        </div>
        <div className='navbar__menu'>
            <NavLink to="/sweets">Sweets</NavLink>
        </div>
        <div className='navbar__menu'>
            <NavLink to="/drinks">Drinks</NavLink>
        </div>
   </nav>
    

  )
}

export default Navbar