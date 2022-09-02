import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import SingleProperty from "./SingleProperty";
import "../Styles/propertyCategory.css";
import PageHeader from "./PageHeader";
import { useState } from "react";
import getUniqueParameter from "./getUniqueParameter";
import PropertyCondition from "./PropertyCondition";

const AllProperties = () => {
  const [query, setQuery] = useState({
    location: "location",
    numberOfRooms: "numberOfRooms",
    price: "price",
    propertyCondition: "condition",
  });
  // call current states to update components
  let allProperties = useSelector((state) => state.products.properties);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  // get unique search parameters using the utility function below
  let propertyLocation = getUniqueParameter(allProperties, "location");
  // include local government as the select default value
  propertyLocation = ["location", ...propertyLocation];

  // property condition option value
  let condtions = ["condition", ...PropertyCondition];

  let sortedRooms = allProperties;

  const handleQuery = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setQuery({ ...query, [name]: value });

    console.log(query);
    console.log(sortedRooms);
  };

  if (query.location !== "location") {
    sortedRooms = allProperties.filter(
      (property) => property.location === query.location
    );
  }

  if (query.propertyCondition !== "condition") {
    sortedRooms = sortedRooms.filter(
      (property) => property.propertyCondition === query.propertyCondition
    );
  }

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
          name="location"
          id="location"
          value={query.location}
          onChange={handleQuery}
        >
          {propertyLocation.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select
          name="propertyCondition"
          id="propertyCondition"
          value={query.propertyCondition}
          onChange={handleQuery}
        >
          {condtions.map((condition) => (
            <option key={condition} value={condition}>
              {condition}
            </option>
          ))}
        </select>
      </form>
      <article className="room__list">
        {sortedRooms.map((property) => {
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
