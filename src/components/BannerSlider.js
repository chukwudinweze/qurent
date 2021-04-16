import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ImageSlide from "../images/qurent-banner.jpeg";
import { Link } from "react-router-dom";
import "../Styles/BannerSlider.css";

const bannerDatas = [
  {
    img: ImageSlide,
    heading: "Rent a home",
    detail:
      "We're creating a seamless online experience for people in nsukka-from shopping on the largest network, to applyiing, to paying rent",
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
    heading: "sell your home/land",
    detail: "we're creating a seamless online experience",
    button: "rent home",
  },
  {
    img: ImageSlide,
    heading: "rent a home with just your phone at ease",
    detail: "we're creating a seamless online experience",
    button: "rent home",
  },
  {
    img: ImageSlide,
    heading: "rent a home with just your phone at ease",
    detail: "we're creating a seamless online experience",
    button: "rent home",
  },
];
const BannerSlider = () => {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "1rem",
        autoplay: "true",
        pauseOnHover: "false",
        arrows: "!false",
        height: "300px",
      }}
      hasSliderWrapper
    >
      {React.Children.toArray(
        bannerDatas.map((bannerData) => {
          const { img, heading, detail, button } = bannerData;
          return (
            <SplideSlide>
              <div
                class="slide__wrapper"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="slide__item">
                  <h1 className="h1">{heading}</h1>
                  <p>{detail}</p>
                  <button className="rent__home">
                    <Link to="/homes">{button}</Link>
                  </button>
                </div>
              </div>
            </SplideSlide>
          );
        })
      )}
    </Splide>
  );
};

export default BannerSlider;
