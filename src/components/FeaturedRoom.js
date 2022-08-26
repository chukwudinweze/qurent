import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/room.css";

const FeaturedRoom = ({ room }) => {
  let { title, price, pictures, id } = room;
  // format title and price if and only if title,pictures and price was returned
  let coverPicture;
  if (title && price && pictures) {
    title = title.substring(0, 20);
    price = price.toLocaleString();
    let [firstImage] = pictures;
    coverPicture = firstImage;
  }

  return (
    room && (
      <Link to="/room-details" className="room__wrapper">
        <div className="image__container">
          <img src={pictures && coverPicture} alt={title} />
          <p className="no__of__pictures">{pictures && pictures.length}</p>
        </div>
        <article className="room__details">
          <p className="title">{title}...</p>
          <div className="price__fav__container">
            <p className="price">&#8358; {price && price}</p>
            <BookmarkBorderIcon
              // onClick={dispatch(id)}
              style={{ color: "#20c063", marginRight: "0.3125rem" }}
            />
          </div>
        </article>
      </Link>
    )
  );
};

export default FeaturedRoom;
