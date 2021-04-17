import React from "react";
import "../Styles/category.css";

const Category = ({ src, title }) => {
  return (
    <div>
      <div className="icon">
        <img src={src && src} alt={title && title} />
      </div>
      <p className="title">{title && title}</p>
    </div>
  );
};

export default Category;
