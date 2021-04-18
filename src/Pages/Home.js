import React from "react";
import HomeSlide from "../components/HomeSlide";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeSlide />
      <Categories />
    </>
  );
};

export default Home;
