import React from "react";

const Facility = ({ facility }) => {
  console.log(facility);
  const [firstFacility, secondFaacility, ...facilities] = facility;
  return <p>{firstFacility}</p>;
};

export default Facility;
