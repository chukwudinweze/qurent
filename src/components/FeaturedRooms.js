import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import FeaturedRoom from "./FeaturedRoom";
import Data from "./Data";
import { useSelector } from "react-redux";
import "../Styles/featuredRoom.css";

const FeaturedRooms = () => {
  // read states from redux store
  const rooms = useSelector((state) => state.products);
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
