import React from "react";
import loaderGif from "../images/qurentLoader.gif";

const Loading = ({ title }) => {
  return (
    <div>
      <h3>{title && title}</h3>
      <img src={loaderGif} alt="loading..." />
    </div>
  );
};

export default Loading;
