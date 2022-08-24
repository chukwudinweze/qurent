import React from "react";
import Loading from "./Loading";
import FeaturedRoom from "./FeaturedRoom";
import "../Styles/featuredRoom.css";
import { useSelector } from "react-redux";
import useFetchData from "./useFetchApi";
import { fetchFlats } from "../actions/products";
import { useEffect } from "react";

const RoomSelfContain = () => {
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/rooms.json";
  const { fetchData } = useFetchData(url, "Self Contain", fetchFlats);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const flats = useSelector((state) => state.products.flats);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  if (loading) {
    return <Loading title="featured rooms" />;
  }
  return (
    <section className="featured__rooms">
      <h3>Room Self Contain</h3>
      <article className="room__list">
        {flats.map((room) => {
          return <FeaturedRoom key={room.id} room={room} />;
        })}
      </article>
    </section>
  );
};

export default RoomSelfContain;
