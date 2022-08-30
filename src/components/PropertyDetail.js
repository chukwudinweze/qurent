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
import { useState } from "react";

const PropertyDetail = () => {
  const [propertyData, setPropertyData] = useState("");
  const params = useParams();

  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  const { id } = params;

  useEffect(() => {
    const fetchcv = async () => {
      try {
        const response = await fetch(
          `https://qurent-a1b03-default-rtdb.firebaseio.com/property/${id}.json`
        );
        if (!response.ok) {
          throw new Error("could not fetch data");
        }
        const data = await response.json();
        console.log("somehting here", data);
        setPropertyData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchcv();
  }, [id]);

  if (!propertyData) {
    return <p>nothing is returned....</p>;
  }

  //   if (propertyData) {
  //     console.log(propertyData);
  //     return <p>something is returned....</p>;
  //   }

  // const furnished = propertyFacilities.find(
  //   (facility) => facility === " Furnished"
  // );
  // const parkingSpace = propertyFacilities.find(
  //   (facility) => facility === " Parking space"
  // );
  return (
    <>
      <PageHeader titleLeft={`Property Detail`} />
      {propertyData && <PropertyDetailSlide pictures={propertyData.pictures} />}
      {propertyData && (
        <PropertyDetailDescription
          description={{
            title: propertyData.title,
            price: propertyData.price,
            location: propertyData.location,
            phoneNumber: propertyData.phoneNumber,
          }}
        />
      )}
      {/* <PropertyConditionHighlight
        furnished={"furnished"}
        parkingSpace={parkingSpace}
        condition={propertyCondition}
      /> */}
      <PropertyDetailFacilities />
      <PropertyDetailBriefDesc />
      <DetailAttention />
      <Footer />
    </>
  );
};

export default PropertyDetail;
