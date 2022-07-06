import React from 'react'

import styles from './css/nav.module.css'
import logo from './images/logo.png'


const NavBar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
        <a href="#" className={styles.logo}>
        <img src={logo} alt="Logo" />
        </a>
        

        <ul className={styles.links}>


          <li className={styles.nav}><a href="#"> SignIn </a></li>
          <li className={styles.nav}><a href="#"> Premium</a></li>
          <li className={styles.nav}><a href="#"> About Us</a></li>
          <li className={styles.nav}><a href="#"> Contact Us</a></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar