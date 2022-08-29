import React from "react";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import "../Styles/detailAttention.css";

const DetailAttention = () => {
  return (
    <article className="detail__attention">
      {" "}
      <h5>
        <AnnouncementIcon style={{ fontSize: "45px" }} />
      </h5>
      <em>
        Please be aware that all of our agents have been fully registered and
        captured. We take full responsibility for every properties listed.
      </em>
    </article>
  );
};

export default DetailAttention;
