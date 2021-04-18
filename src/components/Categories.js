import React from "react";
import Category from "../components/Category";
import Flat from "../images/q-flat.png";
import FlatIcone from "../images/slide-img2.jpg";
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
      <Category src={FlatIcone} title="all category" />
      <Category src={Flat} title="flat" />
      <Category src={SelfContain} title="self contain" />
      <Category src={SingleRoom} title="single room" />
      <Category src={Shop} title="shop" />
      <Category src={OfficeSpace} title="office space" />
      <Category src={EventCenter} title="hall/event center" />
      <Category src={Land} title="land" />
    </div>
  );
};

export default Categories;
