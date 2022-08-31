import React from "react";
import NairaSymbol from "./NairaSymbol";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import "../Styles/PropertyDetailDescription.css";
import { useDispatch } from "react-redux";
import { fetchSavedProperty } from "../actions/products";

const PropertyDetailDescription = ({ description }) => {
  let { title, price, location, phoneNumber, itemToSave } = description;

  console.log("we check again", itemToSave);
  if (price) {
    price = price.toLocaleString();
  }

  const dispatch = useDispatch();

  const saveItemHandler = () => {
    dispatch(fetchSavedProperty(itemToSave));
    console.log("checking", itemToSave.id);
  };
  return (
    <article className="room__detail_description">
      <h4>{title}</h4>
      <div className="price__and__bookmark">
        <h5>
          <NairaSymbol /> {price}
        </h5>
        <button onClickCapture={saveItemHandler}>
          <BookmarkBorderIcon style={{ color: "#20c063" }} />
        </button>
      </div>
      <div className="roomdetail__location">
        <LocationOnIcon style={{ fontSize: "1rem" }} />
        {location}
      </div>
      <div className="roomdetail__contact__detail">
        <button className="callAgentNumber">
          <a href={`Tel:${phoneNumber}`}>
            <PhoneInTalkIcon />
            <p>Call Agent</p>
          </a>
        </button>
        <button className="smsAgentNumber">
          {" "}
          <a
            href={`sms:${phoneNumber}?&body= Hello, Could you please confirm whether the ${title} you listed on qurent.ng is still available?
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
