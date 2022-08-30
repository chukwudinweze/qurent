import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import "../Styles/propertDetailFacilities.css";

const PropertyDetailFacilities = ({ facilities }) => {
  return (
    <article className="property__detail__facilities">
      <h6>Facilities</h6>
      <ul>
        {facilities.map((facility) => {
          return (
            <li>
              <CheckCircleOutlineIcon
                style={{ fontSize: "16px", color: "#20c063" }}
              />
              <p>{facility}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default PropertyDetailFacilities;
