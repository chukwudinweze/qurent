import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ImageSlide from "../images/home-slide-backgroundImg.jpg";
import { Link } from "react-router-dom";
import "../Styles/homeSlide.css";

const bannerDatas = [
  {
    img: ImageSlide,
    heading: "Rent a home",
    detail:
      "We're creating a seamless online experience for people in Nsukka, from shopping on the largest network, to applyiing and paying for rent",
    buttonLabel: "rent home",
    path: "/properties",
  },
  {
    img: ImageSlide,
    heading: "Contact Our Agent",
    detail:
      "The property have been listed by estate agents who can be contacted by just tapping the Call Agent or Text Agent button provided in each property listing",
    buttonLabel: "Search",
    path: "/properties",
  },

  {
    img: ImageSlide,
    heading: "Search Property",
    detail:
      "The list can be filtered by price, furnishing, location. Our goal is to provide our users an easy way to find property in Nsukka",
    buttonLabel: "Search Property",
    path: "/properties",
  },
  {
    img: ImageSlide,
    heading: "Save Property",
    detail:
      "When you find property that you like, tap on the bookmark button to save it. Tap on the remove button to delete proprty from your saved properties",
    buttonLabel: "Save Property",
    path: "/saved-ads",
  },
];
const HomeSlide = () => {
  return (
    <div className="slide__cover">
      <Splide
        options={{
          type: "loop",
          gap: "1rem",
          autoplay: "true",
          pauseOnHover: "false",
          arrows: "true",
        }}
        className="home__slider"
      >
        {React.Children.toArray(
          bannerDatas.map((bannerData) => {
            const { img, heading, detail, buttonLabel, path } = bannerData;
            return (
              <SplideSlide>
                <div
                  style={{
                    backgroundImage: `url(${img})`,
                    border: "1px solid #f8f8f8",
                    paddingBottom: "100px",
                    borderRadius: "0px",
                  }}
                  className="slide__item"
                >
                  <h1 className="h1">{heading}</h1>
                  <p>{detail}</p>
                  <button className="rent__home">
                    <Link to={path}>{buttonLabel}</Link>
                  </button>
                </div>
              </SplideSlide>
            );
          })
        )}
      </Splide>
    </div>
  );
};

export default HomeSlide;
