import React, { useEffect } from "react";
import Loading from "./Loading";
import FeaturedRoom from "./FeaturedRoom";
import { useSelector } from "react-redux";
import "../Styles/featuredRoom.css";
import useFetchData from "../components/firebase/FetchData";
import { fetchFeaturedRooms } from "../actions/products";
// import { fetchFeaturedRooms } from "../actions/products/";

const FeaturedRooms = () => {
  // call custom hook to fetch data
  useFetchData("category", "flat", fetchFeaturedRooms);

  const rooms = useSelector((state) => state.products.properties);
  // const featuredRooms = rooms.filter((room) => room.featured);

  const featuredRooms = rooms.filter((room) => room.featured);
  const loading = useSelector((state) => state.uiInteraction.loading);

  if (loading) {
    return <Loading title="featured rooms" />;
  }
  return (
    <section className="featured__rooms">
      <h3>featured ads</h3>
      <article className="room__list">
        {featuredRooms.map((room, index) => {
          return <FeaturedRoom key={index} room={room} />;
        })}
      </article>
    </section>
  );
};

export default FeaturedRooms;
