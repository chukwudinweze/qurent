import React from "react";
import PageHeader from "./PageHeader";
import "../Styles/Userprofile.css";
import { useState } from "react";

const UserProfile = () => {
  const [settingsBtnUnderline, setSettingsBtnUnderline] = useState(true);
  const [detailBtnUnderline, setDetailBtnUnderline] = useState(false);
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
    </section>
  );
};

export default UserProfile;
