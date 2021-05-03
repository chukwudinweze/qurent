import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "../Styles/pageHeader.css";

const PageHeader = ({ titleLeft, titleRight }) => {
  return (
    <header className="page__header">
      {titleLeft && (
        <article className="title__left">
          <button className="arrow__back__icon">
            <ArrowBackIosIcon style={{ fontSize: "2rem", color: "#20c063" }} />
          </button>
          <p>{titleLeft}</p>
        </article>
      )}
      {titleRight && (
        <article className="title__right">
          <button type="button">{titleRight}</button>
        </article>
      )}
    </header>
  );
};

export default PageHeader;
