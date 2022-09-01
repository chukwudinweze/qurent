import React from "react";
import loadingGif from "../images/qurentGIFLoader.gif";
import "../Styles/qurentLoaderGif.css";

const QurentLoaderGif = () => {
  return (
    <div className="gifContainer">
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default QurentLoaderGif;
