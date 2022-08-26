import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import useFetchData from "./useFetchApi";
import { fetchFlats } from "../actions/products";
import { useEffect } from "react";
import SingleRoom from "./SingleRoom";
import "../Styles/roomSelfContain.css";
import PageHeader from "./PageHeader";

const RoomSelfContain = () => {
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/rooms.json";
  const { fetchData } = useFetchData(url, "Self-Contain", fetchFlats);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const flats = useSelector((state) => state.products.flats);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  if (loading) {
    return <Loading title="featured rooms" />;
  }

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }
  return (
    <section className="room__self__contain">
      <PageHeader titleLeft="Room Self Contain" style={{ color: "red" }} />

      <article className="room__list">
        {flats.map((room) => {
          return <SingleRoom key={room.id} room={room} />;
        })}
      </article>
    </section>
  );
};

export default RoomSelfContain;
