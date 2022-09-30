import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../Styles/pageHeader.css";
import { useHistory } from "react-router-dom";

// header component that is fixed at the top of the category pages
const PageHeader = ({ titleLeft, titleRight }) => {
  let history = useHistory();
  return (
    <div className="header__wrapper">
      <header className="page__header">
        {titleLeft && (
          <article className="title__left">
            <button
              onClick={() => {
                history.goBack();
              }}
              className="arrow__back__icon"
            >
              <ArrowBackIosIcon
                style={{ transform: "scaleY(0.8)", color: "#20c063" }}
              />
            </button>
            <p>{titleLeft}</p>
          </article>
        )}
        {/* {titleRight && (
          <article className="title__right">
            <button type="button">{titleRight}</button>
          </article>
        )} */}
      </header>
    </div>
  );
};

export default PageHeader;
