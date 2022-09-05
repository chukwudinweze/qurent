import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../Styles/property__detail__slide.css";
import ImagePlaceHolder from "../images/imagePlaceHolder.png";

const PropertyDetailSlide = ({ pictures }) => {
  return (
    <section>
      <article className="property__detail__slide">
        <Splide
          tag="section"
          options={{
            type: "loop",
            gap: "1rem",
            width: "100%",
            height: "250px",
            autoplay: "true",
            pauseOnHover: "false",
            arrows: "true",
            lazyLoad: true,
            cover: true,
          }}
        >
          {pictures &&
            pictures.map((bannerData, index) => {
              return (
                <SplideSlide key={index}>
                  <img
                    src={bannerData || ImagePlaceHolder}
                    data-splide-lazy="path-to-the-image"
                    alt="property slide"
                  />
                </SplideSlide>
              );
            })}

          {!pictures && (
            <SplideSlide>
              <img
                src={ImagePlaceHolder}
                alt="property slide"
                data-splide-lazy="path-to-the-image"
              />
            </SplideSlide>
          )}
        </Splide>
      </article>
    </section>
  );
};

export default PropertyDetailSlide;
