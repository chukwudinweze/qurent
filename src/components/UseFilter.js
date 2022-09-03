import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import getUniqueParameter from "./getUniqueParameter";

const UseFilter = (allprops) => {
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
  let sortedRooms = allProperties;
  // get maximum price
  let maxPropertyPrice = Math.max(
    ...allProperties.map((properties) => properties.price)
  );
  // adding one million to the maxprice
  // maxPropertyPrice += 1000000;

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
    return property.price >= minPrice && property.price <= maxPrice;
  });
};

export default UseFilter;
