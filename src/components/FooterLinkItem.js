import React from "react";
import { Link } from "react-router-dom";
import "../Styles/footerLinkItem.css";
const FooterLinkItem = ({ title, to }) => {
  return (
    <li className="footer__link__item__wrapper">
      <Link className="footer__link__item" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default FooterLinkItem;
