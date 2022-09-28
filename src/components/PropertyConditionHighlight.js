import React from "react";
import "../Styles/PropertyConditionHighlight.css";

const PropertyConditionHighlight = ({ facilityHighlight, condition }) => {
  // check if facilityHighlight contains furnished or parkingSpace
  const furnished = facilityHighlight.includes("furnished");
  const parkingSpace = facilityHighlight.includes("parking space");

  return (
    <article className="property__condition__highlight">
      <p>{condition}</p>
      {furnished ? <p>Furnished</p> : <p>Not Furnished</p>}
      {parkingSpace ? <p>Parking Space</p> : <p>No Parking Space</p>}
    </article>
  );
};

export default PropertyConditionHighlight;
