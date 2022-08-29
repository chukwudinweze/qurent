import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import useFetchData from "./useFetchApi";
import { setFetchData } from "../actions/products";
import { useEffect } from "react";
import SingleProperty from "./SingleProperty";
import "../Styles/propertyCategory.css";
import PageHeader from "./PageHeader";

const AllProperties = () => {
  // call current states to update components
  const allProperties = useSelector((state) => state.products.properties);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  console.log(allProperties);

  if (loading) {
    return <Loading title="featured rooms" />;
  }

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }

  if (!loading && !error && allProperties.length === 0) {
    return <p>No property listed in this category, Please check out others</p>;
  }

  return (
    <section className="room__self__contain">
      <PageHeader titleLeft="All PropertiesS" style={{ color: "red" }} />

      <article className="room__list">
        {allProperties.map((property) => {
          return <SingleProperty key={property.id} property={property} />;
        })}
      </article>
    </section>
  );
};

export default AllProperties;
