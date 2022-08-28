import React from "react";
import "../Styles/contactAgentRoomdtail.css";

const ContactAgentRoomdtail = ({
  typeOfContact,
  phoneNumber,
  title,
  icon,
  label,
}) => {
  return (
    // This button is designed in such a way that if the typeOfContact is
    // sms, then it ppends body else if it Tel, then append nothing
    <button button className="contact__agent__button">
      <a
        href={`${typeOfContact}:${phoneNumber}${
          typeOfContact === "sms" &&
          `?&body= Hello, Could you please confirm whether the ${title} you listed on qurent.ng is still available?`
        }`}
      >
        {icon}
        {label}
      </a>
    </button>
  );
};

export default ContactAgentRoomdtail;
