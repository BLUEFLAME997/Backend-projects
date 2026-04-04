import React from 'react'
import '../style/loginPop.scss'
import { SnippetsContext } from '../Snippets.context'
import { useContext } from 'react'

const LoginPopUp = () => {
  const context = useContext(SnippetsContext);
  const {loggedIn,setLoggedIn}=context;

  return (
    <div className={`login-pop-up ${loggedIn?'open':''}`}>
      <div className="icon">
        <i className="ri-check-double-line"></i>
      </div>
      <p>Logged In</p>
    </div>
  )
}

export default LoginPopUp
