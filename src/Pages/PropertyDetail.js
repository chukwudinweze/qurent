import React from "react";
import PageHeader from "../components/PageHeader";
import PropertyDetailDescription from "../components/PropertyDetailDescription";
import PropertyDetailSlide from "../components/PropertyDetailSlide";
import "../Styles/homeSlide.css";
import PropertyConditionHighlight from "../components/PropertyConditionHighlight";
import PropertyDetailFacilities from "../components/PropertyDetailFacilities";

const PropertyDetail = () => {
  return (
    <section>
      <PageHeader titleLeft={`Property Detail`} />
      <PropertyDetailSlide />
      <PropertyDetailDescription />
      <PropertyConditionHighlight />
      <PropertyDetailFacilities />
      <br />
      <br />
      hfhffjfjfj
    </section>
  );
};

export default PropertyDetail;
