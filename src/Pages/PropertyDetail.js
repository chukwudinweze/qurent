import React from "react";
import PageHeader from "../components/PageHeader";
import ImageSlide from "../images/hero-img_640px.jpg";
import PropertyDetailDescription from "../components/PropertyDetailDescription";
import PropertyDetailSlide from "../components/PropertyDetailSlide";
import fff from "../images/q-office.png";
import "../Styles/homeSlide.css";

const PropertyDetail = () => {
  return (
    <section>
      <PageHeader titleLeft={`Property Detail`} />
      <PropertyDetailSlide />
      <PropertyDetailDescription />
      <br />
      <br />
      hfhffjfjfj
    </section>
  );
};

export default PropertyDetail;
