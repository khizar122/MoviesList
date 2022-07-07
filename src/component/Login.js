import React from 'react'
import formStyles from './css/register.module.css'
const Login = () => {
  return (
    <div className={formStyles.wrap}>

      <form className={formStyles.loginform} action="">

        <div className={formStyles.formheader}>
          <h3 >Login Form</h3>
          <p>Login to access your Account</p>
        </div>

        <div className={formStyles.formgroup}>
          <input type="email" className={formStyles.forminput} placeholder="email@example.com" />
        </div>

        <div className={formStyles.formgroup}>
          <input type="password" className={formStyles.forminput} placeholder="password" />
        </div>

        <div className={formStyles.formgroup}>
          <button className={formStyles.formbutton} type="submit">Login</button>
        </div>

        <div className={formStyles.formfooter}>
          Don't have an account? <a href="/#">Sign Up</a>
        </div>
      </form>
    </div>
  )
}

export default Login