import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import SingleProperty from "./SingleProperty";
import "../Styles/propertyCategory.css";
import PageHeader from "./PageHeader";
import EmptySavedItem from "./EmptySavedItem";
import NoInternetConnection from "./NoInternetConnection";

const SavedProperties = () => {
  // call current states to update components
  const savedProperties = useSelector(
    (state) => state.products.savedProperties
  );
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  if (loading) {
    return (
      <>
        <PageHeader titleLeft="Flats" />;
        <Loading />;
      </>
    );
  }

  if (error) {
    return <NoInternetConnection />;
  }

  if (!loading && !error && savedProperties.length === 0) {
    return <EmptySavedItem />;
  }

  return (
    <section className="room__self__contain">
      <PageHeader titleLeft="Your Saved Properties" style={{ color: "red" }} />

      <article className="room__list">
        {savedProperties &&
          savedProperties.map((property) => {
            return (
              <SingleProperty
                key={property.id}
                property={property}
                deleteBtn={true}
              />
            );
          })}
      </article>
    </section>
  );
};

export default SavedProperties;
