import React from "react";
import PageHeader from "../components/PageHeader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ImageSlide from "../images/hero-img_640px.jpg";
import PropertyDetailDescription from "../components/PropertyDetailDescription";
import fff from "../images/q-office.png";
import "../Styles/homeSlide.css";

const PropertyDetail = () => {
  const test = [ImageSlide, fff, ImageSlide, ImageSlide, ImageSlide];
  return (
    <section>
      <PageHeader titleLeft={`Property Detail`} />
      <div className="slide__cover">
        <Splide
          tag="section"
          options={{
            type: "loop",
            gap: "1rem",
            autoplay: "true",
            pauseOnHover: "false",
            arrows: "true",
          }}
          className="home__slider"
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
      <PropertyDetailDescription />
    </section>
  );
};

export default PropertyDetail;
