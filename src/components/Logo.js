import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/qurentaLogo.png";
import "../Styles/logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Qurent.ng" />
      </Link>
    </div>
  );
};

export default Logo;
