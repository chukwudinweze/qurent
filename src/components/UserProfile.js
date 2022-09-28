import React from "react";
import PageHeader from "./PageHeader";
import "../Styles/Userprofile.css";
import { useState } from "react";
import SingleProperty from "./SingleProperty";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [settingsBtnUnderline, setSettingsBtnUnderline] = useState(true);
  const [detailBtnUnderline, setDetailBtnUnderline] = useState(false);

  let allProperties = useSelector((state) => state.products.properties);
  let email = useSelector((state) => state.user.email);

  const myAds = allProperties.filter((property) => property.email === email);

  console.log(myAds);
  const settings = () => {
    setSettingsBtnUnderline(true);
    setDetailBtnUnderline(false);
  };
  const details = () => {
    setDetailBtnUnderline(true);
    setSettingsBtnUnderline(false);
  };
  return (
    <section className="profile__details">
      <PageHeader titleLeft="Profile" />
      <nav>
        <button
          onClick={settings}
          className={`${
            settingsBtnUnderline
              ? "underlineBtn profile__details_btn"
              : "profile__details_btn"
          }`}
        >
          My Adverts
        </button>
        <button
          onClick={details}
          className={`${
            detailBtnUnderline
              ? "underlineBtn profile__details_btn "
              : "profile__details_btn"
          }`}
        >
          Settings
        </button>
      </nav>
      {/* <div>
        {!loading && !error && sortedFlats.length === 0 && <ErrorSearching />}
      </div> */}
      <article className="room__list">
        {allProperties.map((property) => {
          return (
            <SingleProperty
              key={property.id}
              property={property}
              deleteBtn={false}
            />
          );
        })}
      </article>
    </section>
  );
};

export default UserProfile;
