import React from "react";
import "../Styles/category.css";
import { Link } from "react-router-dom";

const Category = ({ style, to, Icon, src, title }) => {
  return (
    <Link to={to} style={style && { ...style }} className="category">
      <div
        className="icon__wrapper"
        style={{
          background: `url(${src && src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {Icon && <Icon style={{ fontSize: "3.75rem", color: style.color }} />}
      </div>
      <p className="title">{title && title}</p>
    </Link>
  );
};

export default Category;
