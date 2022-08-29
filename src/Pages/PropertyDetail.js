import React, { useEffect } from "react";
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
import useFetchData from "../components/useFetchApi";
import { setFetchData } from "../actions/products";

const PropertyDetail = () => {
  const params = useParams();

  const allProperties = useSelector((state) => state.products.properties);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  const { id } = params;

  console.log("params", id);
  console.log("all in all", allProperties);

  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/property.json";
  const { fetchData } = useFetchData(url, setFetchData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // call current states to update components

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
