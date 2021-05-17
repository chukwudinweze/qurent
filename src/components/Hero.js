import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Link to="/rooms" className="searchInput__wrapper">
        <input
          className="hero__search__input"
          type="text"
          placeholder="Search House, Street, Neighbourhood"
        />
        <button type="button">
          <SearchIcon style={{ color: "#fff", transform: "scale(1.2, 1.2)" }} />
        </button>
      </Link>
    </section>
  );
};

export default Hero;
