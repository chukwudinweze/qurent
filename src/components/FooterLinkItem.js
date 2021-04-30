import React from "react";
import { Link } from "react-router-dom";

const FooterLinkItem = ({ title, to }) => {
  return (
    <li className="footer__link__item">
      <Link to={to}>{title}</Link>
    </li>
  );
};

export default FooterLinkItem;
