import React from "react";
import { Link } from "react-router-dom";
import Facility from "./Facility";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MessageIcon from "@material-ui/icons/Message";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import "../Styles/SingleRoom.css";
import ContactAgent from "./ContactAgent";
import { useDispatch } from "react-redux";
import { removeSavedItem } from "../actions/products";
import ImagePlaceHolder from "../images/imagePlaceHolder.png";

const SingleProperty = ({ property, deleteBtn }) => {
  const dispatch = useDispatch();
  let {
    title,
    price,
    pictures,
    id,
    propertyFacilities,
    phoneNumber,
    location,
    category,
  } = property;

  // format title and price if and only if title,pictures and price was returned
  let coverPicture;
  if (title && price && pictures) {
    price = price.toLocaleString();
    let [firstImage] = pictures;
    coverPicture = firstImage;
  }

  const removeItemHandler = () => {
    dispatch(removeSavedItem(id));
  };

  return (
    <article className="single__room__wrapper">
      <Link to={`/properties/${id}`} className="single_room__highlight">
        <div className="single__room__image__container">
          <img
            src={(pictures && coverPicture) || ImagePlaceHolder}
            alt={title}
          />
          <div className="num__of__pictures">
            {pictures && <p>{pictures.length}</p>}
            {!pictures && <p>{0}</p>}
            <PhotoCameraIcon style={{ fontSize: "0.82rem" }} />
          </div>
        </div>
        <article className="Single__room__description">
          <p className="single__room__title">{title}</p>
          <p className="single__room__price">
            &#8358;{price}{" "}
            {category === "land" ? (
              ""
            ) : (
              <span className="per__annum">per annum</span>
            )}
          </p>

          <div className="single__room__facilities">
            {propertyFacilities &&
              propertyFacilities.map((facility) => (
                <Facility key={facility} facility={facility} />
              ))}
          </div>

          <div className="single__room__location">
            <LocationOnIcon
              style={{ fontSize: "0.938rem", transform: "scaleX(1.2)" }}
            />{" "}
            {location}
          </div>
        </article>
      </Link>
      <div className="single__room__contact__detail">
        <ContactAgent
          typeOfContact="Tel"
          phoneNumber={phoneNumber}
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
          phoneNumber={phoneNumber}
          label="Chat Agent"
          title={title}
          icon={
            <MessageIcon
              style={{ fontSize: "1.25rem", marginRight: "0.313rem" }}
            />
          }
        />
        {deleteBtn && (
          <button className="delete__property" onClick={removeItemHandler}>
            Remove
          </button>
        )}
      </div>
    </article>
  );
};

export default SingleProperty;
