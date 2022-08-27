import React from "react";
import NairaSymbol from "./NairaSymbol";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MessageIcon from "@material-ui/icons/Message";

import "../Styles/PropertyDetailDescription.css";
import ContactAgent from "./ContactAgent";

const PropertyDetailDescription = () => {
  return (
    <article className="room__detail_description">
      <h4 className>
        3 bedroom flat for sale at UNN maing gate with a chip wonderful price
      </h4>
      <h5>
        <NairaSymbol /> 13,000,000
      </h5>
      <div className="roomdetail__location">
        <LocationOnIcon style={{ fontSize: "1rem", transform: "scale(1.2)" }} />
        location
      </div>
      <div className="roomdetail__contact__detail">
        <ContactAgent
          typeOfContact="Tel"
          phoneNumber={`08060281867`}
          label="Call Agent"
          icon={
            <PhoneInTalkIcon
              style={{
                fontSize: "1.188rem",
                marginRight: "0.313rem",
              }}
            />
          }
        />
        <ContactAgent
          typeOfContact="sms"
          phoneNumber={`08060281867`}
          label="Chat Agent"
          title={`title`}
          icon={
            <MessageIcon
              style={{ fontSize: "1.25rem", marginRight: "0.313rem" }}
            />
          }
        />
        <ContactAgent />
      </div>
    </article>
  );
};

export default PropertyDetailDescription;
