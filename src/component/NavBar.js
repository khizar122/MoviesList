import React from 'react'

import styles from './css/nav.module.css'
import logo from './images/logo.png'


const NavBar = () => {
  return (
    <div>
        <nav >
       
        <img src={logo} alt="Logo" />
        
        

        <ul className={styles.links}>


          <li className={styles.nav}>SignIn </li>
          <li className={styles.nav}> Premium</li>
          <li className={styles.nav}>About Us</li>
          <li className={styles.nav}>Contact Us</li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar