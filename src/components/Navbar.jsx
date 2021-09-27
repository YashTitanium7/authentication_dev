import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          Home
        </Link>
        <ul>
          <Link className="navbar__button" to="/login">
            <button className="navbar__button-login">Login</button>
          </Link>
          <Link className="navbar__button" to="/register">
            <button className="navbar__button-register">Register</button>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
