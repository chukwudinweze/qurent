import React from "react";
import NairaSymbol from "./NairaSymbol";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import "../Styles/PropertyDetailDescription.css";
import { useDispatch } from "react-redux";
import { fetchSavedProperty, removeSavedItem } from "../actions/products";
import { useSelector } from "react-redux";

const PropertyDetailDescription = ({ description }) => {
  let { title, price, location, phoneNumber, itemToSave } = description;

  // get check if this item is currently saved
  const savedProperty = useSelector((state) => state.products.savedProperties);
  const existingProperty = savedProperty.find(
    (property) => property.id === itemToSave.id
  );

  console.log("we check again", itemToSave);
  if (price) {
    price = price.toLocaleString();
  }

  const dispatch = useDispatch();

  const saveItemHandler = () => {
    dispatch(fetchSavedProperty(itemToSave));
  };

  const removeItemHandler = () => {
    dispatch(removeSavedItem(itemToSave.id));
  };
  return (
    <article className="room__detail_description">
      <h4>{title}</h4>
      <div className="price__and__bookmark">
        <h5>
          <NairaSymbol /> {price}
        </h5>
        {!existingProperty && (
          <button onClick={saveItemHandler}>
            <BookmarkBorderIcon style={{ color: "#20c063" }} />
          </button>
        )}
        {existingProperty && (
          <button onClick={removeItemHandler}>
            <BookmarkIcon style={{ color: "#20c063" }} />
          </button>
        )}
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
