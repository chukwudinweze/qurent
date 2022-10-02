import React from "react";
import { Avatar } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import NavItem from "./NavItem";
import Logo from "./Logo";
import "../Styles/header.css";
import { Link } from "react-router-dom";
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
      <div className="nav__desktop">
        <div className="saved__ads__desktop">
          <NavItem Icon={BookmarkBorderIcon} to="/saved-ads" />
        </div>
        <Link to="/profile" className="profile_avater">
          <Avatar
            style={{
              height: "2.3rem",
              width: "2.3rem",
              marginRight: "0.625rem",
              background: "#cdf5dd",
              color: "#20c063",
              border: "2px solid rgb(191, 218, 191)",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
