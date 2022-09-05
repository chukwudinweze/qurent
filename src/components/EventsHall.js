import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import useFetchData from "./useFetchApi";
import { fetchEventCenters } from "../actions/products";
import { useEffect } from "react";
import SingleProperty from "./SingleProperty";
import "../Styles/propertyCategory.css";
import PageHeader from "./PageHeader";
import getUniqueParameter from "./getUniqueParameter";
import PropertyCondition from "./PropertyCondition";
import { Slider } from "@material-ui/core";
import ErrorSearching from "./ErrorSearching";
import { useState } from "react";

const EventsHall = () => {
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/property.json";
  const { fetchData } = useFetchData(url, fetchEventCenters, "eventCenter");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [query, setQuery] = useState({
    location: "location",
    propertyCondition: "condition",
    price: [10000, 20000000],
  });

  // format price to add comas used as price filter label
  let minPrice = +query.price[0];
  let maxPrice = +query.price[1];
  let formatedMinPrice = minPrice.toLocaleString();
  let formatedMaxPrice = maxPrice.toLocaleString();

  // call current states to update components
  const eventCenters = useSelector((state) => state.products.eventCenters);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);
  let sortedEventCenters = eventCenters;

  // get maximum price
  let maxPropertyPrice = Math.max(
    ...eventCenters.map((properties) => properties.price)
  );

  // get unique search parameters using the utility function below
  let propertyLocation = getUniqueParameter(eventCenters, "location");
  // include local government as the select default value
  propertyLocation = ["location", ...propertyLocation];

  // property condition option value. propertyCondition was imported pls
  let condtions = ["condition", ...PropertyCondition];

  const handleQuery = (e, data) => {
    e.preventDefault();
    let name;
    if (e.target.name !== "location" && e.target.name !== "propertyCondition") {
      name = "price";
    } else {
      name = e.target.name;
    }
    let value = name === "price" ? data : e.target.value;
    setQuery({ ...query, [name]: value });
  };

  // filter items depending on the current query state
  if (query.location !== "location") {
    sortedEventCenters = eventCenters.filter(
      (property) => property.location === query.location
    );
  }

  if (query.propertyCondition !== "condition") {
    sortedEventCenters = sortedEventCenters.filter(
      (property) => property.propertyCondition === query.propertyCondition
    );
  }

  sortedEventCenters = sortedEventCenters.filter((property) => {
    return property.price >= minPrice && property.price <= maxPrice;
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }

  return (
    <section className="room__self__contain">
      <PageHeader titleLeft="Hall/Event Centers" style={{ color: "red" }} />
      <form className="filter__form">
        <div className="location__condition__filter">
          <div className="filter__location">
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
          <div className="filter__condition">
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
        </div>
        <div style={{ overflow: "hidden" }} className="filter__price">
          <p>Select Price Range</p>
          <p>
            &#8358;{formatedMinPrice} - &#8358;{formatedMaxPrice}
          </p>
          <Slider
            name="price"
            disableSwap
            value={query.price}
            onChange={handleQuery}
            min={10000}
            max={maxPropertyPrice}
            style={{ transform: "scaleY(1.5)" }}
          />
        </div>
      </form>
      <div>
        {!loading && !error && sortedEventCenters.length === 0 && (
          <ErrorSearching />
        )}
      </div>
      <article className="room__list">
        {sortedEventCenters.map((property) => {
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

export default EventsHall;
