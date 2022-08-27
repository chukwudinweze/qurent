import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ImageSlide from "../images/hero-img_640px.jpg";
import fff from "../images/q-office.png";
import "../Styles/property__detail__slide.css";

const PropertyDetailSlide = ({ pictures }) => {
  const test = [ImageSlide, fff, ImageSlide, ImageSlide, ImageSlide];
  return (
    <section>
      <article className="property__detail__slide">
        <Splide
          tag="section"
          options={{
            type: "loop",
            gap: "1rem",
            width: "100vh",
            height: "250px",
            autoplay: "true",
            pauseOnHover: "false",
            arrows: "true",
            lazyLoad: true,
            cover: true,
          }}
        >
          return{" "}
          {React.Children.toArray(
            test.map((bannerData) => {
              return (
                <SplideSlide>
                  <img
                    src={bannerData}
                    data-splide-lazy="path-to-the-image"
                    alt=""
                  />
                </SplideSlide>
              );
            })
          )}
        </Splide>
      </article>
    </section>
  );
};

export default PropertyDetailSlide;
