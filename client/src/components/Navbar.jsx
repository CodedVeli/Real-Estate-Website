import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const logoImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgz3FRbAhG8UICdsOV2o2gF6FMYkab6K9ozw&usqp=CAU";

  return (
    <div>
      <nav className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
        <div className="home">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/property">Property</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="login">
          <Link className="signup" to="/">
            Sign Up
          </Link>
          <Link className="log-in" to="/">
            Log In
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
