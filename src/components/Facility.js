import React from "react";
import "../Styles/facility.css";

const Facility = ({ facility }) => {
  return (
    <>
      {" "}
      <p className="single__room__facility">{facility}</p>
    </>
  );
};

export default Facility;
