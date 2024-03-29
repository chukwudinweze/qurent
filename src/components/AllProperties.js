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
import "../Styles/allProperties.css";
import ErrorSearching from "./ErrorSearching";
import useFetchData from "./useFetchApi";
import { setFetchData } from "../actions/products";
import { useEffect } from "react";
import NoInternetConnection from "./NoInternetConnection";
import Footer from "./Footer";

const AllProperties = () => {
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/property.json";
  const { fetchData } = useFetchData(url, setFetchData);

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
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);
  let allProperties = useSelector((state) => state.products.properties);
  let sortedProperties = allProperties;
  // get maximum price
  let maxPropertyPrice = Math.max(
    ...allProperties.map((properties) => properties.price)
  );

  // get unique search parameters using the utility function below
  let propertyLocation = getUniqueParameter(allProperties, "location");
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
    sortedProperties = allProperties.filter(
      (property) => property.location === query.location
    );
  }

  if (query.propertyCondition !== "condition") {
    sortedProperties = sortedProperties.filter(
      (property) => property.propertyCondition === query.propertyCondition
    );
  }

  sortedProperties = sortedProperties.filter((property) => {
    return property.price >= minPrice && property.price <= maxPrice;
  });

  // render
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <PageHeader titleLeft="All Properties" />
        <NoInternetConnection />
      </>
    );
  }

  return (
    <>
      <section style={{ marginBottom: "1.875rem" }}>
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
          {!loading && !error && sortedProperties.length === 0 && (
            <ErrorSearching />
          )}
        </div>
        {/* room__list and room__list__desktop class is from the featuredroom css style */}
        <article className="room__list room__list__destop">
          {sortedProperties.map((property) => {
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
      <Footer />
    </>
  );
};

export default AllProperties;
