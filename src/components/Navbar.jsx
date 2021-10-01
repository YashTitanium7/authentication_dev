import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from './Modal'

const Navbar = ({ loginStatus, getDetails }) => {

  const [logoutModalStatus, setLogoutModalStatus] = useState(false)

  const logout = (e) => {
    e.preventDefault()
    // localStorage.removeItem('token')
    // window.location.replace('/')
    setLogoutModalStatus(!logoutModalStatus)
  }
  
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          Home
        </Link>
        <ul>
          {loginStatus ? (
            <>
              <Link className="navbar__button" to="/" onClick={logout}>
                <button className="navbar__button-logout">Logout</button>
              </Link>
            </>
          ) : (
            <>
              <Link className="navbar__button" to="/login">
                <button className="navbar__button-login">Login</button>
              </Link>
              <Link className="navbar__button" to="/register">
                <button className="navbar__button-register">Register</button>
              </Link>
            </>
          )}
        </ul>
        {/* <Modal /> */}
        {
          logoutModalStatus && <Modal />
        }
      </div>
    </>
  );
};

export default Navbar;
