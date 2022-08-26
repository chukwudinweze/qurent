import React from "react";
import "../Styles/contactAgent.css";

const ContactAgent = ({ typeOfContact, phoneNumber, label, icon }) => {
  return (
    <button button className="contact__agent__button">
      <a href={`${typeOfContact}:${phoneNumber}`}>
        {icon}
        {label}
      </a>
    </button>
  );
};

export default ContactAgent;
