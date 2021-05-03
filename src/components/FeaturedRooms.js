import React, { useState } from "react";
import Loading from "./Loading";
import FeaturedRoom from "./FeaturedRoom";
import Data from "./Data";
import "../Styles/featuredRoom.css";

const FeaturedRooms = () => {
  const [loading, setLoading] = useState(false);
  const featuredRooms = Data.filter((room) => room.featured === true);
  if (loading) {
    return <Loading title="featured rooms" />;
  }
  return (
    <section className="featured__rooms">
      <h3>featured ads</h3>
      <article className="room__list">
        {featuredRooms.map((room) => {
          return <FeaturedRoom key={room.id} room={room} />;
        })}
      </article>
    </section>
  );
};

export default FeaturedRooms;
