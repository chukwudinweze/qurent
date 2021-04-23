import React from "react";
import HomeSlide from "../components/HomeSlide";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedRooms from "../components/FeaturedRooms";
import NavLinks from "../components/NavLinks";

const Home = () => {
  return (
    <section
      className="main"
      style={{ background: "rgb(241, 239, 239)", position: "relative" }}
    >
      <Header />
      <Hero />
      <HomeSlide />
      <Categories />
      <FeaturedRooms />
      <NavLinks />
    </section>
  );
};

export default Home;
