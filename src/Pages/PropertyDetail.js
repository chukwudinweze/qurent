import React from "react";
import PageHeader from "../components/PageHeader";
import PropertyDetailDescription from "../components/PropertyDetailDescription";
import PropertyDetailSlide from "../components/PropertyDetailSlide";
import "../Styles/homeSlide.css";
import PropertyConditionHighlight from "../components/PropertyConditionHighlight";
import PropertyDetailFacilities from "../components/PropertyDetailFacilities";
import PropertyDetailBriefDesc from "../components/PropertyDetailBriefDesc";
import DetailAttention from "../components/DetailAttention";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PropertyDetail = () => {
  const params = useParams();

  const { id } = params;
  const allProperties = useSelector((state) => state.products.properties);

  console.log("params", id);
  console.log("all in all", allProperties);

  // const propertId = allProperties.find((property) => {
  //   return property.id === id;
  // });
  // const {
  //   localGvt,
  //   category,
  //   pictures,
  //   location,
  //   propertyAdress,
  //   propertyCondition,
  //   numberOfRooms,
  //   description,
  //   propertyFacilities,
  //   price,
  //   title,
  //   phoneNumber,
  // } = propertId;

  return (
    <section>
      <PageHeader titleLeft={`Property Detail`} />
      <PropertyDetailSlide />
      <PropertyDetailDescription />
      <PropertyConditionHighlight />
      <PropertyDetailFacilities />
      <PropertyDetailBriefDesc />
      <DetailAttention />
      <Footer />
    </section>
  );
};

export default PropertyDetail;
