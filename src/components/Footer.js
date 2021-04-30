import React, { useState } from "react";
import Logo from "./Logo";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FooterLinkItem from "./FooterLinkItem";
import { useDispatch, useSelector } from "react-redux";
import { expandFooter } from "../actions/uiInteraction";
import "../Styles/footer.css";
const Footer = () => {
  const expand = useSelector((state) => state.uiInteraction.expand);
  const dispatch = useDispatch();
  return (
    <section className="footer" style={{ marginBottom: "50px" }}>
      <button
        className="expand__footer"
        type="button"
        onClick={() => dispatch(expandFooter())}
      >
        <Logo />
        {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </button>

      {expand && (
        <>
          <ul className="footer__links__wrapper">
            <FooterLinkItem title="About Qurenta" to={"/about-qurenta"} />
            <FooterLinkItem
              title="Terms & Conditions"
              to={"/terms-and-conditions"}
            />
            <FooterLinkItem title="FAQ" to={"/faq"} />
            <FooterLinkItem title="about qurenta" to={"/about-qurenta"} />
          </ul>
          <article className="copyright">
            <p>free property listing in Nsukka</p>
            <p>
              &copy; <span>{new Date().getFullYear().toString()}</span>
            </p>
          </article>
        </>
      )}
    </section>
  );
};

export default Footer;
