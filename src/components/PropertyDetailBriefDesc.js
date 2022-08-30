import React from "react";
import "../Styles/PropertyDetailBriefDesc.css";

const PropertyDetailBriefDesc = ({ description }) => {
  return (
    <article className="property__additional__information">
      <h6>Additional Information</h6>
      <p>{description}</p>
    </article>
  );
};

export default PropertyDetailBriefDesc;
