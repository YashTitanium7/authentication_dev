import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure()
const Navbar = ({ loginStatus, getDetails }) => {
  const [logoutModalStatus, setLogoutModalStatus] = useState(false);

  function logout() {
    setLogoutModalStatus(false);
    toast("You are logged out now.", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "dark"
    });
    localStorage.removeItem('token')
    setTimeout(() => {
      window.location.replace('/')
    }, 2000);
  };
  function cancelLogout() {
    setLogoutModalStatus(false)
  }
  function showLogoutModal(e) {
    e.preventDefault();
    setLogoutModalStatus(true)
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
              <Link className="navbar__button" to="/" onClick={showLogoutModal}>
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
        {logoutModalStatus && (
          <Modal
            question="Do you really want to logout?"
            decline="Cancel"
            accept="Proceed"
            declineFunc={cancelLogout}
            acceptFunc={logout}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
