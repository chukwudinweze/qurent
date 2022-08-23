import React from "react";
import Loading from "./Loading";
import FeaturedRoom from "./FeaturedRoom";
import "../Styles/featuredRoom.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useCallback } from "react";
import { setError, setLoading, setSuccess } from "../actions/uiInteraction";
import { fetchData, setFetchData } from "../actions/products";

const FeaturedRooms = () => {
  const featuredRooms = useSelector((state) => state.products.properties);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const dispatch = useDispatch();

  const makd = useCallback(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(
          "https://qurent-a1b03-default-rtdb.firebaseio.com/rooms.json"
        );
        if (!response.ok) {
          throw new Error("could not fetch rooms, please try again later");
        }
        const data = await response.json();

        for (const key in data) {
          let loadedRoom = {
            id: key,
            localGvt: data[key].localGvt,
            category: data[key].category,
            pictures: data[key].pictures,
            location: data[key].location,
            propertyFor: data[key].propertyFor,
            propertyAdress: data[key].propertyAdress,
            propertyCondition: data[key].propertyCondition,
            numberOfRooms: data[key].numberOfRooms,
            description: data[key].description,
            propertyFacilities: data[key].propertyFacilities,
            price: data[key].price,
            acceptTerms: data[key].acceptTerms,
            title: data[key].title,
            phoneNumber: data[key].phoneNumber,
            featured: data[key].featured,
          };
          dispatch(setFetchData(loadedRoom));
        }
      } catch (error) {
        console.log(error.message);
        dispatch(setError(true));
      }
      dispatch(setLoading(false));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    try {
      makd();
    } catch (error) {
      dispatch(setError(true));
    }
  }, [makd, dispatch]);

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
