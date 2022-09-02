import React, { useEffect } from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import SingleProperty from "./SingleProperty";
import "../Styles/propertyCategory.css";
import PageHeader from "./PageHeader";
import useFetchData from "./useFetchApi";
import { useState } from "react";
import getUniqueParameter from "./getUniqueParameter";

const AllProperties = () => {
  const [query, setQuery] = useState({
    localGvt: "localGvt",
    location: "location",
    numberOfRooms: "numberOfRooms",
    price: "price",
    propertyCondition: "propertyCondition",
  });
  // call current states to update components
  let allProperties = useSelector((state) => state.products.properties);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  // get unique search parameters using the utility function below
  let localgvts = getUniqueParameter(allProperties, "localGvt");
  // includ a select default value
  localgvts = ["Local Government", ...localgvts];

  let sortedRooms;

  const handleQuery = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setQuery({ [name]: value });
    console.log("i am mad mannnnnn", query.localGvt);
  };

  // if (gg === "All") {
  //   sortedRooms = allProperties;
  // } else {
  //   sortedRooms = allProperties.filter((property) => property.localGvt === gg);
  // }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }

  if (!loading && !error && allProperties.length === 0) {
    return <p>No property listed in this category, Please check out others</p>;
  }

  return (
    <section className="room__self__contain">
      <PageHeader titleLeft="All Properties" style={{ color: "red" }} />
      <form>
        <select
          name="localGvt"
          id="localGvt"
          value={query.localGvt}
          onChange={handleQuery}
        >
          {localgvts.map((localgvt) => (
            <option key={localgvt} value={localgvt}>
              {localgvt}
            </option>
          ))}
        </select>
      </form>
      <article className="room__list">
        {allProperties.map((property) => {
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

export default AllProperties;
