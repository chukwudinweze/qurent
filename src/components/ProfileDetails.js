import { Button } from "@material-ui/core";
import React from "react";
import placeholder from "../images/qurent-profile-img.png";
import "../Styles/ProfileDetails.css";

const ProfileDetails = ({ email, numberOfAds }) => {
  return (
    <article className="user__profile">
      <div className="profile__img__envelope">
        <img src={placeholder} alt="profile place holder" />
      </div>
      <p className="profile__email">Email: {email}</p>
      <p className="number__of__ads">Number of Ads Posted: {numberOfAds}</p>
      <Button>Log Out</Button>
    </article>
  );
};

export default ProfileDetails;
