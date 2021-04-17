import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/hero.css";

const Hero = () => {
  return (
    <Link to="/rooms">
      <div className="hero">
        <div className="searchInput__wrapper">
          <input
            type="text"
            placeholder="Search House, Street, Neighbourhood"
          />
          <button type="button">
            <SearchIcon
              style={{ color: "#fff", transform: "scale(1.2, 1.2)" }}
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Hero;
