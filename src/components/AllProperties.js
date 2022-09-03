import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import SingleProperty from "./SingleProperty";
import "../Styles/propertyCategory.css";
import PageHeader from "./PageHeader";
import { useState } from "react";
import getUniqueParameter from "./getUniqueParameter";
import PropertyCondition from "./PropertyCondition";
import { Slider } from "@material-ui/core";

const AllProperties = () => {
  let allProperties = useSelector((state) => state.products.properties);
  let maxPrice = Math.max(
    ...allProperties.map((properties) => properties.price)
  );

  const [query, setQuery] = useState({
    location: "location",
    price: 10000000,
    propertyCondition: "condition",
    range: [0, 20000000],
  });

  // format price to add comas used as price filter label
  let formatedPrice = +query.price;
  let formatedLabelPrice = formatedPrice.toLocaleString();

  // call current states to update components

  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  // get unique search parameters using the utility function below
  let propertyLocation = getUniqueParameter(allProperties, "location");
  // include local government as the select default value
  propertyLocation = ["location", ...propertyLocation];

  // property condition option value
  let condtions = ["condition", ...PropertyCondition];

  let sortedRooms = allProperties;

  const handleQuery = (e, data) => {
    e.preventDefault();
    let name;
    if (e.target.name !== "location" && e.target.name !== "propertyCondition") {
      name = "range";
    } else {
      name = e.target.name;
    }
    let value = name === "range" ? data : e.target.value;
    setQuery({ ...query, [name]: value });

    console.log("min", query.range[0]);
    console.log("max", query.range[1]);

    // console.log(name);
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

  sortedRooms = sortedRooms.filter((property) => {
    return property.price <= formatedPrice;
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }

  return (
    <section className="room__self__contain">
      <PageHeader titleLeft="All Properties" style={{ color: "red" }} />
      <form>
        <div className="filter__group">
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
        </div>
        <div className="filter__group">
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
        </div>
        <div style={{ overflow: "hidden" }} className="filter__group">
          <Slider
            name="range"
            value={query.range}
            onChange={handleQuery}
            min={0}
            max={maxPrice}
            style={{ transform: "scaleY(1.5)" }}
          />
        </div>
        {/* <div className="filter__group">
          <label htmlFor="price"> &#8358; {formatedLabelPrice}</label>
          <input
            type="range"
            name="price"
            id="price"
            max={maxPrice}
            min="0"
            value={query.price}
            onChange={handleQuery}
            style={{ width: "100%" }}
          />
        </div> */}
      </form>
      <div>
        {!loading && !error && sortedRooms.length === 0 && (
          <p>Unfortunately no property matched your search parameters</p>
        )}
      </div>
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
