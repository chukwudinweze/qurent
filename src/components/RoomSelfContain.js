import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import useFetchData from "./useFetchApi";
import { fetchSelfContain } from "../actions/products";
import { useEffect } from "react";
import SingleProperty from "./SingleProperty";
import "../Styles/propertyCategory.css";
import PageHeader from "./PageHeader";

const RoomSelfContain = () => {
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/property.json";
  const { fetchData } = useFetchData(url, fetchSelfContain, "selfContain");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // call current states to update components
  const selfContains = useSelector((state) => state.products.selfContain);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }

  if (!loading && !error && selfContains.length === 0) {
    return <p>No property listed in this category, Please check out others</p>;
  }

  return (
    <section className="room__self__contain">
      <PageHeader titleLeft="Room self contain" style={{ color: "red" }} />

      <article className="room__list">
        {selfContains.map((property) => {
          return (
            <SingleProperty
              key={property.id}
              property={property}
              deleteBtn={false}
            />
          );
        })}
      </article>
    </section>
  );
};

export default RoomSelfContain;
