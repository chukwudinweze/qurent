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
  const url =
    "https://qurent-a1b03-default-rtdb.firebaseio.com/properties.json";
  const { fetchData } = useFetchData(url, setFetchData);

  const featuredRooms = useSelector((state) => state.products.properties);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

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

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }

  if (!loading && !error && featuredRooms.length === 0) {
    return <p>No property listed in this category, Please check out others</p>;
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
