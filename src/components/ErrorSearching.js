import React from "react";
import "../Styles/ErrorSearching.css";
import emptysearchGIF from "../images/emptySearch.gif";

const ErrorSearching = () => {
  return (
    <section className="errorSearching">
      {" "}
      <h2>Oops!</h2>
      <div className="empty__gif__wrapper">
        <img
          src={emptysearchGIF}
          alt="Unfortunately no property matched your search parameters"
        />
      </div>
    </section>
  );
};

export default ErrorSearching;
