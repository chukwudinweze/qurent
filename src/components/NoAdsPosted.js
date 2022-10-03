import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import SavedItemEmpty from "../images/empty-saved-items.png";
import "../Styles/EmptySavedItem.css";

const NoAdsPosted = () => {
  const history = useHistory();
  const redirectHandler = () => {
    history.replace("/post-ads");
  };
  return (
    <article className="empty__saved__item">
      <h6 className="first__child">You have not posted any property yet</h6>
      <div className="wrapp_image">
        <img src={SavedItemEmpty} alt="you have no item saved" />
      </div>
      <p className="last__child">
        Do you have a property to rent out? You are only click away from showing
        your property to thousands of our users
      </p>
      <Button onClick={redirectHandler}>Post property</Button>
    </article>
  );
};

export default NoAdsPosted;
