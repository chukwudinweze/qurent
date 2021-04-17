import React from "react";
import { Link } from "react-router-dom";
import ImageSlide from "../images/qurent-banner.jpeg";
import "../Styles/hero.css";

const Hero = () => {
  return (
    <Link to="/rooms">
      <div className="hero" style={{ background: `url(${ImageSlide})` }}>
        <input type="text" />
        <button type="button"></button>
      </div>
    </Link>
  );
};

export default Hero;
