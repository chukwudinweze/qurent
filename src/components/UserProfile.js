import React from "react";
import PageHeader from "./PageHeader";
import "../Styles/Userprofile.css";
import { useState } from "react";
import SingleProperty from "./SingleProperty";
import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
import Footer from "./Footer";
import Loading from "./Loading";
import NoInternetConnection from "./NoInternetConnection";
import EmptySavedItem from "./EmptySavedItem";

const UserProfile = () => {
  const [userSettingsActive, setUserSettingsActive] = useState(false);
  const [userAdsActive, setUserAdsActive] = useState(true);

  // get user's ads from redux store
  let allProperties = useSelector((state) => state.products.properties);
  let email = useSelector((state) => state.user.email);
  const myAds = allProperties.filter((property) => property.email === email);

  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  // handle state
  const settings = () => {
    setUserSettingsActive(true);
    setUserAdsActive(false);
  };
  const details = () => {
    setUserAdsActive(true);
    setUserSettingsActive(false);
  };

  if (loading) {
    return (
      <>
        <PageHeader titleLeft="Profile" />;
        <Loading />;
      </>
    );
  }

  if (!loading && !error && myAds.length === 0) {
    return <p>No adverts from you yet</p>;
  }

  return (
    <section className="profile__details ">
      <PageHeader titleLeft="Profile" />
      <div className="room__list__destop">
        <nav>
          <button
            onClick={details}
            className={`${
              userAdsActive
                ? "underlineBtn profile__details_btn "
                : "profile__details_btn"
            }`}
          >
            My Adverts
          </button>
          <button
            onClick={settings}
            className={`${
              userSettingsActive
                ? "underlineBtn profile__details_btn"
                : "profile__details_btn"
            }`}
          >
            Settings
          </button>
        </nav>
        {!error ? (
          <article className="profile__details__article">
            {userAdsActive && (
              <article className="room__list myadverts ">
                {myAds.map((property) => {
                  return (
                    <SingleProperty
                      key={property.id}
                      property={property}
                      deleteBtn={false}
                    />
                  );
                })}
              </article>
            )}
            {userSettingsActive && (
              <ProfileDetails email={email} numberOfAds={myAds.length} />
            )}
          </article>
        ) : (
          <NoInternetConnection />
        )}
      </div>
      <Footer />
    </section>
  );
};

export default UserProfile;
