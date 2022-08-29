import React from "react";
import "../Styles/PropertyConditionHighlight.css";

const PropertyConditionHighlight = ({ furnished, parkingSpace }) => {
  return (
    <article className="property__condition__highlight">
      <p>Newly Built</p>
      {furnished ? <p>Not Furnished</p> : <p>Not Furnished</p>}
      {parkingSpace ? <p>car parking Space</p> : <p>No car parking Space</p>}
    </article>
  );
};

export default PropertyConditionHighlight;
