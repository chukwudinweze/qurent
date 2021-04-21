import React, { useState } from "react";
import Loading from "./Loading";
import Room from "./Room";

const FeaturedRooms = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading title="featured rooms" />;
  }
  return (
    <section className="featured__rooms">
      <h3>featured rooms</h3>
      <Room />
    </section>
  );
};

export default FeaturedRooms;
