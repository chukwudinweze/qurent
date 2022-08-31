import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import useFetchData from "./useFetchApi";
import { fetchLands } from "../actions/products";
import { useEffect } from "react";
import SingleProperty from "./SingleProperty";
import PageHeader from "./PageHeader";
import "../Styles/propertyCategory.css";

const LandProperty = () => {
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/property.json";
  const { fetchData } = useFetchData(url, fetchLands, "land");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // call current states to update components
  const lands = useSelector((state) => state.products.lands);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  if (loading) {
    return (
      <>
        <PageHeader titleLeft="Lands for sale" />
        <Loading />
      </>
    );
  }

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }

  if (!loading && !error && lands.length === 0) {
    return <p>No property listed in this category, Please check out others</p>;
  }
  return (
    <section className="page__background">
      <PageHeader titleLeft="Lands for sale" />

      <article className="room__list ">
        {lands.map((property) => {
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

export default LandProperty;
