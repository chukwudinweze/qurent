import React from "react";
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
    <section
      className="footer"
      style={expand ? { marginBottom: "0" } : { marginBottom: "2.5rem" }}
    >
      <div className="expand__footer__wrapper">
        <button
          className="expand__footer__button"
          type="button"
          onClick={() => dispatch(expandFooter())}
        >
          {expand ? (
            <ExpandMoreIcon style={{ fontSize: "2rem" }} />
          ) : (
            <ExpandLessIcon style={{ fontSize: "2rem" }} />
          )}
        </button>
      </div>

      <div
        className="footer__wrapper"
        style={expand ? { maxHeight: "500px" } : { maxHeight: "0px" }}
      >
        <Logo />
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
      </div>
      <div className="footer__wrapper footer__wrapper__desktop">
        <Logo />
        <ul className="footer__links__wrapper">
          <FooterLinkItem title="About Qurenta" to={"/about-qurenta"} />
          <FooterLinkItem
            title="Terms & Conditions"
            to={"/terms-and-conditions"}
          />
          <FooterLinkItem title="FAQ" to={"/faq"} />
          <FooterLinkItem title="about qurenta" to={"/about-qurenta"} />
          <FooterLinkItem title="Safty tips" to={"/about-qurenta"} />
          <FooterLinkItem title="Our Instagram" to={"/about-qurenta"} />
          <FooterLinkItem title="Our Facebook" to={"/about-qurenta"} />
          <FooterLinkItem title="Our Twitter" to={"/about-qurenta"} />
        </ul>
        <article className="copyright">
          <p>free property listing in Nsukka</p>
          <p>
            &copy; <span>{new Date().getFullYear().toString()}</span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Footer;
