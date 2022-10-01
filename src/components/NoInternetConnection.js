import React from "react";
import image from "../images/no-internet-connection.png";
import "../Styles/NoInternetConnection.css";

const NoInternetConnection = () => {
  return (
    <article className="no__internet">
      <div>
        <img src={image} alt="A network bar with no internet connection" />
      </div>
    </article>
  );
};

export default NoInternetConnection;
