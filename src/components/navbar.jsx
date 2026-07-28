import React from "react";
import { logo } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-2">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="120" alt="" />
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <Link className="btn btn-outline-primary ms-auto" to="/login">
            Login
          </Link>
          <Link className="btn btn-primary ms-2" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
