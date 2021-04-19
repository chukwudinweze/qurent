import React from "react";
import Category from "../components/Category";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Flat from "../images/q-flat.png";
import SelfContain from "../images/q-self-contain.png";
import SingleRoom from "../images/q-single-room.png";
import Shop from "../images/q-shop.png";
import OfficeSpace from "../images/q-office.png";
import EventCenter from "../images/q-event-center.png";
import Land from "../images/q-land.png";
import "../Styles/categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <Category
        Icon={AddCircleIcon}
        style={{
          color: "rgb(218, 8, 8)",
          fontSize: "1rem",
          fontWeight: "700",
        }}
        title="post add"
        to="/post-add"
      />
      <Category src={Flat} title="flat" to="/flat" />
      <Category src={SelfContain} title="self contain" to="/self-contain" />
      <Category src={SingleRoom} title="single room" to="/single-room" />
      <Category src={Shop} title="shop" to="/shops" />
      <Category src={OfficeSpace} title="office space" to="/office-space" />
      <Category
        src={EventCenter}
        title="hall/event center"
        to="/event-center"
      />
      <Category src={Land} title="land" to="/land" />
    </div>
  );
};

export default Categories;
