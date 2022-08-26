import React from "react";
import Loading from "./Loading";
import FeaturedRoom from "./FeaturedRoom";
import "../Styles/featuredRoom.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useFetchData from "./useFetchApi";
import { setError } from "../actions/uiInteraction";
import { setFetchData } from "../actions/products";

const FeaturedRooms = () => {
  const dispatch = useDispatch();
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/rooms.json";
  const { fetchData } = useFetchData(url, setFetchData);

  const featuredRooms = useSelector((state) => state.products.properties);
  console.log("lets see", featuredRooms);
  const loading = useSelector((state) => state.uiInteraction.loading);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      dispatch(setError(true));
    }
  }, [fetchData, dispatch]);

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
