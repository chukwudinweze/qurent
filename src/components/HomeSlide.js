import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ImageSlide from "../images/hero-img_640px.jpg";
import { Link } from "react-router-dom";
import "../Styles/homeSlide.css";

const bannerDatas = [
  {
    img: ImageSlide,
    heading: "Rent a home",
    detail:
      "We're creating a seamless online experience for people in nsukka, from shopping on the largest network, to applyiing and paying for rent",
    button: "rent home",
  },
  {
    img: ImageSlide,
    heading: "Buy a home",
    detail:
      "Find your place with an immersive photo experience and the most listings in Nsukka, including homes you won't find anywhere else",
    button: "rent home",
  },
  {
    img: ImageSlide,
    heading: "Rent a home",
    detail:
      "We're creating a seamless online experience for people in nsukka, from shopping on the largest network, to applyiing and paying for rent",
    button: "rent home",
  },
  {
    img: ImageSlide,
    heading: "Rent a home",
    detail:
      "We're creating a seamless online experience for people in nsukka, from shopping on the largest network, to applyiing and paying for rent",
    button: "rent home",
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
            const { img, heading, detail, button } = bannerData;
            return (
              <SplideSlide>
                <div className="slide__item">
                  <h1 className="h1">{heading}</h1>
                  <p>{detail}</p>
                  <button className="rent__home">
                    <Link to="/homes">{button}</Link>
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
