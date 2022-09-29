import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../actions/user";
import placeholder from "../images/qurent-profile-img.png";
import "../Styles/ProfileDetails.css";

const ProfileDetails = ({ email, numberOfAds }) => {
  const dispatch = useDispatch();
  return (
    <article className="user__profile">
      <div className="profile__img__envelope">
        <img src={placeholder} alt="profile place holder" />
      </div>
      <div className="user__details">
        <p className="profile__email">
          <span>Email</span> <span>{email}</span>
        </p>
        <p className="number__of__ads">
          <span>Ads Posted</span> <span>{numberOfAds}</span>
        </p>
      </div>
      <Button size="large" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </article>
  );
};

export default ProfileDetails;
