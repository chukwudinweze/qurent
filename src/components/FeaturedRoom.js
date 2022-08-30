import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedRooms, fetchSavedProperty } from "../actions/products";
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

  // get item from redux store and dispatch to the saveitem
  // const properties = useSelector((state) => state.products.properties);
  // const itemToSave = properties.find((property) => (property.id = id));
  // const dispatch = useDispatch();

  // console.log(itemToSave);
  // const saveItemHandler = (event) => {
  //   dispatch(fetchSavedProperty(itemToSave));
  //   event.nativeEvent.stopPropagation();
  //   console.log("what i am doing I dont know");
  //   // event.preventDefault();
  // };

  return (
    room && (
      <Link to={`/properties/${id}`} className="room__wrapper">
        <div className="image__container">
          <img src={pictures && coverPicture} alt={title} />
          <p className="no__of__pictures">{pictures && pictures.length}</p>
        </div>
        <article className="room__details">
          <p className="title">{title}...</p>
          <div className="price__fav__container">
            <p className="price">&#8358; {price && price}</p>
            <button
              // onClickCapture={saveItemHandler}
              style={{
                color: "#20c063",
                marginRight: "0.3125rem",
                border: "1px solid red",
                padding: "5px 10px",
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
