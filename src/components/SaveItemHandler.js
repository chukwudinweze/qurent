import React from "react";
import { useSelector } from "react-redux";

const useSaveItem = (id) => {
  const properties = useSelector((state) => state.products.properties);

  const itemToSave = properties.find((property) => {
    return property.id === id;
  });
  return { itemToSave };
};

export default useSaveItem;
