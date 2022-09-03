import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import useFetchData from "./useFetchApi";
import { fetchFlats } from "../actions/products";
import { useEffect } from "react";
import SingleProperty from "./SingleProperty";
import "../Styles/propertyCategory.css";
import PageHeader from "./PageHeader";
import { useState } from "react";
import getUniqueParameter from "./getUniqueParameter";
import PropertyCondition from "./PropertyCondition";
import { Slider } from "@material-ui/core";
import ErrorSearching from "./ErrorSearching";

const Flats = () => {
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/property.json";
  const { fetchData } = useFetchData(url, fetchFlats, "flat");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // get state of the user entered search parameters
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
  const flats = useSelector((state) => state.products.flats);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);
  let sortedFlats = flats;

  // get maximum price
  let maxPropertyPrice = Math.max(
    ...flats.map((properties) => properties.price)
  );

  // get unique search parameters using the utility function below
  let propertyLocation = getUniqueParameter(flats, "location");
  // include local government as the select default value
  propertyLocation = ["location", ...propertyLocation];

  // property condition option value
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
    sortedFlats = flats.filter(
      (property) => property.location === query.location
    );
  }

  if (query.propertyCondition !== "condition") {
    sortedFlats = sortedFlats.filter(
      (property) => property.propertyCondition === query.propertyCondition
    );
  }

  sortedFlats = sortedFlats.filter((property) => {
    return property.price >= minPrice && property.price <= maxPrice;
  });

  if (loading) {
    return (
      <>
        <PageHeader titleLeft="Flats" />;
        <Loading />;
      </>
    );
  }

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }

  if (!loading && !error && flats.length === 0) {
    return <p>No property listed in this category, Please check out others</p>;
  }

  return (
    <section className="room__self__contain">
      <PageHeader titleLeft="Flats" style={{ color: "red" }} />
      <PageHeader titleLeft="All Properties" />
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
        {!loading && !error && sortedFlats.length === 0 && <ErrorSearching />}
      </div>
      <article className="room__list">
        {sortedFlats.map((property) => {
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

export default Flats;
