import React from "react";
import "../Styles/PropertyConditionHighlight.css";

const PropertyConditionHighlight = ({ facilityHighlight, condition }) => {
  const furnished = facilityHighlight.includes("furnished");
  const parkingSpace = facilityHighlight.includes("parking space");

  console.log("WE HAVE TO", furnished, parkingSpace, facilityHighlight);
  return (
    <article className="property__condition__highlight">
      <p>{condition}</p>
      {furnished ? <p>Furnished</p> : <p>Not Furnished</p>}
      {parkingSpace ? <p>Parking Space</p> : <p>No Parking Space</p>}
    </article>
  );
};

export default PropertyConditionHighlight;
