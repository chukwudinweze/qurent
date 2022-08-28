import React from "react";
import NairaSymbol from "./NairaSymbol";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MessageIcon from "@material-ui/icons/Message";

import "../Styles/PropertyDetailDescription.css";

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
        <button className="callAgentNumber">
          <a href={`Tel:${"08060281867"}`}>
            <PhoneInTalkIcon />
            <p>Call Agent</p>
          </a>
        </button>
        <button className="smsAgentNumber">
          {" "}
          <a
            href={`sms:${"08060281867"}?&body= Hello, Could you please confirm whether the ${"title"} you listed on qurent.ng is still available?
        `}
          >
            <MessageIcon /> <p>Text Agent</p>
          </a>
        </button>
      </div>
    </article>
  );
};

export default PropertyDetailDescription;
