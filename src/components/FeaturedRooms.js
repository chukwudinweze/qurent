import React, { useEffect } from "react";
import Loading from "./Loading";
import FeaturedRoom from "./FeaturedRoom";
import { useSelector, useDispatch } from "react-redux";
import "../Styles/featuredRoom.css";
import { startFetchData } from "../actions/products";

const FeaturedRooms = () => {
  // read states from redux store
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.products.properties);
  const featuredRooms = rooms.filter((room) => room.featured);
  const loading = useSelector((state) => state.uiInteraction.loading);
  useEffect(() => {
    dispatch(startFetchData());
  }, [dispatch]);
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
