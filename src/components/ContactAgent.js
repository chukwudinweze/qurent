import React from "react";
import "../Styles/contactAgent.css";

const ContactAgent = ({ typeOfContact, phoneNumber, label, icon, title }) => {
  return (
    // This button is designed in such a way that if the typeOfContact is
    // sms, then it ppends body else if it Tel, then append nothing
    <button button className="contact__agent__button">
      <a
        href={`${typeOfContact}:${phoneNumber}${
          typeOfContact === "sms"
            ? `?&body= Hello, Could you please confirm whether this ${title} you listed on qurent.ng is still available?`
            : ""
        }`}
      >
        {icon}
        {label}
      </a>
    </button>
  );
};

export default ContactAgent;
