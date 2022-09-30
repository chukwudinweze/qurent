import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import SavedItemEmpty from "../images/empty-saved-items.png";
import "../Styles/EmptySavedItem.css";

const EmptySavedItem = () => {
  const history = useHistory();
  const redirectHandler = () => {
    history.replace("/properties");
  };
  return (
    <article className="empty__saved__item">
      <h6 className="first__child">You have no property saved yet</h6>
      <div className="wrapp_image">
        <img src={SavedItemEmpty} alt="you have no item saved" />
      </div>
      <p className="last__child">
        When you find property that you like, click on the bookmark button to
        see it here
      </p>
      <Button onClick={redirectHandler}>Click to find properties</Button>
    </article>
  );
};

export default EmptySavedItem;
