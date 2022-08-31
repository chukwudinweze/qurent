import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/navItem.css";

const NavItem = ({ to, Icon, title }) => {
  return (
    <li className="nav__link__wrapper">
      <NavLink
        key={title}
        className="nav__link"
        activeClassName="selected"
        exact
        to={to}
      >
        <Icon />
        {title}
      </NavLink>
    </li>
  );
};

export default NavItem;
