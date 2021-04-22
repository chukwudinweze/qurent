import FavouriteIcon from "@material-ui/icons/Favourite";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/room.css";

const Room = ({ room }) => {
  let {
    id,
    title,
    details,
    advantage,
    price,
    featured,
    condition,
    ceiling,
    floor,
    pictures,
  } = room;
  // format title and price
  title = title.substring(0, 20);
  price = price.toString();

  const [main, ...minor] = pictures;
  return (
    <Link to="/room-details" className="room__wrapper">
      <div className="image__container">
        <img src={pictures && main} alt={title} />
      </div>
      <article class="room__details">
        <p className="title">{title}...</p>
        <div className="price__fav__container">
          <p className="price">&#8358; {price && price}</p>
          <FavouriteIcon style={{ color: "rgb(218, 8, 8)" }} />
        </div>
      </article>
    </Link>
  );
};

export default Room;
