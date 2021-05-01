import React from "react";
import { useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import PermIdentity from "@material-ui/icons/PermIdentity";
import NavItem from "./NavItem";
import "../Styles/navLinks.css";
const NavLinks = () => {
  const expand = useSelector((state) => state.uiInteraction.expand);
  return (
    <>
      {!expand && (
        <nav>
          <ul className="nav__lists">
            <NavItem Icon={HomeIcon} title="home" to="/" />
            <NavItem Icon={BookmarkBorderIcon} title="saved" to="/saved-ads" />
            <NavItem Icon={AddToQueueIcon} title="rent out" to="/post-ads" />
            <NavItem Icon={PermIdentity} title="profile" to="/profile" />
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavLinks;
