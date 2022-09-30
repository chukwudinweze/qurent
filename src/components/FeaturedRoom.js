import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ImagePlaceHolder from "../images/imagePlaceHolder.png";

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/room.css";

const FeaturedRoom = ({ room }) => {
  let { title, price, pictures, id } = room;

  // format title and price if and only if title,pictures and price was returned
  let coverPicture;
  let titleMobile;
  let titleIpad;
  let titleDesktop;
  if (title && price && pictures) {
    // get dynamic featured room title depending on the screen size
    titleMobile = title.substring(0, 20);
    titleIpad = title.substring(0, 40);
    titleDesktop = title;
    price = price.toLocaleString();
    let [firstImage] = pictures;
    coverPicture = firstImage;
  }

  return (
    room && (
      <Link to={`/properties/${id}`} className="room__wrapper">
        <div className="image__container">
          <img
            src={(pictures && coverPicture) || ImagePlaceHolder}
            alt={title}
          />
          <p className="no__of__pictures">{pictures && pictures.length}</p>
          <p className="no__of__pictures">{!pictures && 0}</p>
        </div>
        <article className="room__details">
          <p className="title title__mobile">{titleMobile}...</p>
          <p className="title title__ipad">{titleIpad}...</p>
          <p className="title title__desktop">{titleDesktop}</p>
          <div className="price__fav__container">
            <p className="price">&#8358; {price && price}</p>
            <button
              style={{
                color: "#20c063",
                marginRight: "0.3125rem",
              }}
            >
              <BookmarkBorderIcon style={{ color: "#20c063" }} />
            </button>
          </div>
        </article>
      </Link>
    )
  );
};

export default FeaturedRoom;
