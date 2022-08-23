import React from "react";
import Loading from "./Loading";
import FeaturedRoom from "./FeaturedRoom";
import "../Styles/featuredRoom.css";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setSuccess } from "../actions/uiInteraction";
import { setFetchData } from "../actions/products";
import { array } from "yup/lib/locale";

const RoomSelfContain = () => {
  const properties = useSelector((state) => state.products.properties);
  const loading = useSelector((state) => state.uiInteraction.loading);

  const dispatch = useDispatch();

  dispatch(setLoading(true));
  const selfconRooms = properties.filter((property) => {
    return property.category === "Flat";
  });

  dispatch(setLoading(false));

  if (loading) {
    return <Loading title="featured rooms" />;
  }
  return (
    <section className="featured__rooms">
      <h3>Room Self Contain</h3>
      <article className="room__list">
        {selfconRooms.map((room) => {
          return <FeaturedRoom key={room.id} room={room} />;
        })}
      </article>
    </section>
  );
};

export default RoomSelfContain;
