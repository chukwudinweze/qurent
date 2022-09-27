import React from "react";
import PageHeader from "./PageHeader";
import "../Styles/Userprofile.css";
import { useState } from "react";

const UserProfile = () => {
  const [settingsBtnUnderline, setSettingsBtnUnderline] = useState(false);
  const [detailBtnUnderline, setDetailBtnUnderline] = useState(false);
  return (
    <section className="profile__details">
      <PageHeader titleLeft="Profile" />
      <nav>
        <button
          className={`${
            settingsBtnUnderline
              ? "underline profile__details_btn"
              : "profile__details_btn"
          }`}
        >
          My Adverts
        </button>
        <button
          className={`${
            detailBtnUnderline
              ? "underline profile__details_btn "
              : "profile__details_btn"
          }`}
        >
          Settings
        </button>
      </nav>
    </section>
  );
};

export default UserProfile;
