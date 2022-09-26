import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import PropertyDetailDescription from "../components/PropertyDetailDescription";
import PropertyDetailSlide from "../components/PropertyDetailSlide";
import PropertyConditionHighlight from "../components/PropertyConditionHighlight";
import PropertyDetailFacilities from "../components/PropertyDetailFacilities";
import PropertyDetailBriefDesc from "../components/PropertyDetailBriefDesc";
import DetailAttention from "../components/DetailAttention";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Loading from "./Loading";
import "../Styles/propertyDetail.css";

const PropertyDetail = () => {
  const [propertyData, setPropertyData] = useState("");
  const params = useParams();
  const { id } = params;

  //   const itemToSave = properties.find((property) => (property.id = id));

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(
          `https://qurent-a1b03-default-rtdb.firebaseio.com/property/${id}.json`
        );
        if (!response.ok) {
          throw new Error("could not fetch data");
        }
        const data = await response.json();
        setPropertyData({ ...data, id });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPropertyDetails();
  }, [id]);

  if (!propertyData) {
    return <Loading />;
  }

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
            id: propertyData.id,
            itemToSave: propertyData,
          }}
        />
      )}
      <article className="boxshadowclass">
        {propertyData.propertyFacilities && (
          <PropertyConditionHighlight
            facilityHighlight={propertyData.propertyFacilities}
            condition={propertyData.propertyCondition}
          />
        )}
        {propertyData.propertyFacilities && (
          <PropertyDetailFacilities
            facilities={propertyData.propertyFacilities}
          />
        )}
        {propertyData && (
          <PropertyDetailBriefDesc description={propertyData.description} />
        )}
        {propertyData && <DetailAttention />}
        {propertyData && <Footer />}
      </article>
    </>
  );
};

export default PropertyDetail;
