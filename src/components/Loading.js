import React from "react";
import QurentLoaderGif from "./QurentLoaderGif";
import "../Styles/loading.css";

const Loading = () => {
  return (
    <section className="loading__session">
      <QurentLoaderGif />
    </section>
  );
};

export default Loading;
