import React from "react";

const Loading = ({ title }) => {
  return (
    <div>
      <h3>{title && title}</h3>
      loading...
    </div>
  );
};

export default Loading;
