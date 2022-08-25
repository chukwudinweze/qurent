import React from "react";
import { Link } from "react-router-dom";
import Facility from "./Facility";
import "../Styles/SingleRoom.css";

const SingleRoom = ({ room }) => {
  let {
    title,
    price,
    pictures,
    id,
    propertyFacilities,
    phoneNumber,
    location,
  } = room;
  //   console.log("dddd", propertyFacilities);
  // format title and price
  if (title && price && pictures) {
    // title = title.substring(0, 20);
    price = price.toLocaleString();
  }
  const [main] = pictures;
  return (
    <article className="single__room__wrapper">
      <Link to="/room-details" className="single_room__highlight">
        <div className="single__room__image__container">
          <img src={pictures && main} alt={title} />
          <p className="num__of__pictures">{pictures && pictures.length}</p>
          <p>76</p>
        </div>
        <article className="Single__room__description">
          <p className="single__room__title">{title}</p>
          <p className="single__room__price">
            &#8358;{price} <span className="per__annum">per annum</span>
          </p>
          <div className="single__room__facilities">
            {propertyFacilities.map((facility) => (
              <Facility key={facility} facility={facility} />
            ))}
            {/* <Facility facility={propertyFacilities} /> */}
          </div>
          <div className="single__room__location">icon {location}</div>
        </article>
      </Link>
      <div className="room__contact__detail">
        <button>{phoneNumber}</button>
        <button>show contact</button>
      </div>
    </article>
  );
};

export default SingleRoom;