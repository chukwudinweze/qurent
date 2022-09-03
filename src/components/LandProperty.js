import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import useFetchData from "./useFetchApi";
import { fetchLands } from "../actions/products";
import { useEffect } from "react";
import SingleProperty from "./SingleProperty";
import PageHeader from "./PageHeader";
import "../Styles/propertyCategory.css";
import { useState } from "react";
import getUniqueParameter from "./getUniqueParameter";
import { Slider } from "@material-ui/core";
import ErrorSearching from "./ErrorSearching";

const LandProperty = () => {
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/property.json";
  const { fetchData } = useFetchData(url, fetchLands, "land");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // state of the input parameters for the search function
  const [query, setQuery] = useState({
    location: "location",
    price: [10000, 20000000],
  });

  // format price to add comas used as price filter label
  let minPrice = +query.price[0];
  let maxPrice = +query.price[1];
  let formatedMinPrice = minPrice.toLocaleString();
  let formatedMaxPrice = maxPrice.toLocaleString();

  // call current states to update components
  const lands = useSelector((state) => state.products.lands);
  let sortedLands = lands;
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  let maxPropertyPrice = Math.max(
    ...lands.map((properties) => properties.price)
  );

  // get unique search parameters using the utility function below
  let propertyLocation = getUniqueParameter(lands, "location");
  // include local government as the select default value
  propertyLocation = ["location", ...propertyLocation];

  const handleQuery = (e, data) => {
    e.preventDefault();
    let name;
    if (e.target.name !== "location") {
      name = "price";
    } else {
      name = e.target.name;
    }
    let value = name === "price" ? data : e.target.value;
    setQuery({ ...query, [name]: value });
  };

  if (query.location !== "location") {
    sortedLands = lands.filter(
      (property) => property.location === query.location
    );
  }

  sortedLands = sortedLands.filter((property) => {
    return property.price >= minPrice && property.price <= maxPrice;
  });

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
  return (
    <section className="page__background">
      <PageHeader titleLeft="Lands for sale" />
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
        {!loading && !error && sortedLands.length === 0 && <ErrorSearching />}
      </div>

      <article className="room__list ">
        {sortedLands.map((property) => {
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
