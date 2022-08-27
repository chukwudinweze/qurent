import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ImageSlide from "../images/hero-img_640px.jpg";
import fff from "../images/q-office.png";
import "../Styles/homeSlide.css";

const PropertyDetailSlide = () => {
  const test = [ImageSlide, fff, ImageSlide, ImageSlide, ImageSlide];
  return (
    <section>
      <div>
        <Splide
          tag="section"
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: "true",
            pauseOnHover: "false",
            arrows: "true",
          }}
        >
          return{" "}
          {React.Children.toArray(
            test.map((bannerData) => {
              return (
                <SplideSlide>
                  <img src={bannerData} alt="" />
                </SplideSlide>
              );
            })
          )}
        </Splide>
      </div>
    </section>
  );
};

export default PropertyDetailSlide;
