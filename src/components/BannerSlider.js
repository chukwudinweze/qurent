import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ImageSlide from "../images/qurent-banner.jpeg";

const BannerSlider = () => {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "1rem",
        autoplay: "true",
        pauseOnHover: "false",
        arrows: "slider",
      }}
      hasSliderWrapper
    >
      <SplideSlide>
        <img src={ImageSlide} alt="img1" />
      </SplideSlide>
      <SplideSlide>
        <img src={ImageSlide} alt="img1" />
      </SplideSlide>
      <SplideSlide>
        <img src={ImageSlide} alt="img1" />
      </SplideSlide>
    </Splide>
  );
};

export default BannerSlider;
