import React from "react";
import PageHeader from "./PageHeader";
import "../Styles/Userprofile.css";

const UserProfile = () => {
  return (
    <section className="profile__details">
      <PageHeader titleLeft="Profile" />
      <nav>
        <button>Settings</button>
        <button>My Adverts</button>
      </nav>
    </section>
  );
};

export default UserProfile;
