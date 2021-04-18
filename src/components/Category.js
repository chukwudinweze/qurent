import React from "react";
import "../Styles/category.css";

const Category = ({ src, title }) => {
  return (
    <nav className="category">
      <div
        className="icon__wrapper"
        style={{
          background: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img src={src && src} alt={title && title} /> */}
      </div>
      <p className="title">{title && title}</p>
    </nav>
  );
};

export default Category;
