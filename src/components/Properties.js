import React from "react";

const Room = ({ room }) => {
  let { title, price, pictures } = room;
  return (
    <div className="room__envelop">
      <div className="room__highlight">
        <div className="room__img__container"></div>
        <div className="room__highlight__detail"></div>
      </div>
      <div className="room__contact__detail">
        <div className="agent__img"></div>
        <div className="agent__contact"></div>
      </div>
    </div>
  );
};

export default Room;
