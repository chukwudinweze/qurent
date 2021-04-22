import React, { useState } from "react";
import Loading from "./Loading";
import Room from "./Room";
import Data from "./Data";
import { RoomServiceSharp } from "@material-ui/icons";

const FeaturedRooms = () => {
  const [loading, setLoading] = useState(false);
  const featuredRoom = Data.filter((room) => room.featured === true);
  if (loading) {
    return <Loading title="featured rooms" />;
  }
  return (
    <section className="featured__rooms">
      <h3>featured rooms</h3>
      {featuredRoom.map((room) => {
        const {
          id,
          title,
          details,
          advantage,
          price,
          featured,
          condition,
          ceiling,
          floor,
          pictures,
        } = room;
        return <Room {...room} />;
      })}
    </section>
  );
};

export default FeaturedRooms;
