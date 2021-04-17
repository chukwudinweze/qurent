import React from "react";
import "../Styles/categories.css";
import Category from "./Categories";
import FlatIcon from "../images/slide-img.jpg";
const Categories = () => {
  return (
    <div>
      <Category title="flat" />
      <Category title="room" />
      <Category title="office" />
      <Category title="shop" />
    </div>
  );
};

export default Categories;
