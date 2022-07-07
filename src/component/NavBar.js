import React from 'react'

import styles from './css/nav.module.css'
import logo from './images/logo.png'
import {Link}  from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <nav >
       
        <img src={logo} alt="Logo" />
        <ul className={styles.links}>
          <li className={styles.nav}>
            <Link to="/login" style={{ textDecoration: 'none',color:'black' }}>SignIn</Link>
            </li>
          <li className={styles.nav}> 
          <Link to='/register' style={{ textDecoration: 'none',color:'black' }}>Register</Link>
          </li>
          <li className={styles.nav}>
            <Link to='/about' style={{ textDecoration: 'none' ,color:'black'}}>About Us</Link>
            </li>
          <li className={styles.nav}>
            <Link to='/contact' style={{ textDecoration: 'none',color:'black' }}>Contact Us</Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar