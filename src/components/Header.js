import React from "react";
import { Avatar } from "@material-ui/core";
import Logo from "./Logo";
import "../Styles/header.css";
let mobileStyle = {
  height: "2.3rem",
  width: "2.3rem",
  marginRight: "0.625rem",
  background: "#cdf5dd",
  color: "rgb(191, 218, 191)",
  border: "2px solid rgb(191, 218, 191)",
};

const Header = () => {
  return (
    <div className="header">
      <Logo className="logo" />
      <Avatar
        style={{
          height: "2.3rem",
          width: "2.3rem",
          marginRight: "0.625rem",
          background: "#cdf5dd",
          color: "rgb(191, 218, 191)",
          border: "2px solid rgb(191, 218, 191)",
        }}
      />
    </div>
  );
};

export default Header;
