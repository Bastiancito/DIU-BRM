import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink
        className={navLinkClass}
        to='/usm'
      >
        usm.cl
      </NavLink>
      {/* <NavLink
        className={navLinkClass}
        to='/'
      >
        Inicio
      </NavLink> */}
      <NavLink
        className={navLinkClass}
        to='/inicio'
      >Inicio</NavLink>
      <NavLink
        className={navLinkClass}
        to='/postulaciones'
      >
        Postulaciones
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/iniciar-sesion'
      >
        Iniciar sesión
      </NavLink>
    </nav>
  )
}
 
export default NavBar
