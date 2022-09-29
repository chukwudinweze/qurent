import React from "react";
import PageHeader from "./PageHeader";
import "../Styles/Userprofile.css";
import { useState } from "react";
import SingleProperty from "./SingleProperty";
import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
import Footer from "./Footer";

const UserProfile = () => {
  const [userSettingsActive, setUserSettingsActive] = useState(false);
  const [userAdsActive, setUserAdsActive] = useState(true);

  // get user's ads from redux store
  let allProperties = useSelector((state) => state.products.properties);
  let email = useSelector((state) => state.user.email);
  const myAds = allProperties.filter((property) => property.email === email);

  // handle state
  const settings = () => {
    setUserSettingsActive(true);
    setUserAdsActive(false);
  };
  const details = () => {
    setUserAdsActive(true);
    setUserSettingsActive(false);
  };
  return (
    <section className="profile__details">
      <PageHeader titleLeft="Profile" />
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
      {/* <div>
        {!loading && !error && sortedFlats.length === 0 && <ErrorSearching />}
      </div> */}
      {userAdsActive && (
        <article className="room__list">
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
      <Footer />
    </section>
  );
};

export default UserProfile;
