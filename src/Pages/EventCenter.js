import React from "react";
import EventsHall from "../components/EventsHall";
import Footer from "../components/Footer";

const EventCenter = () => {
  return (
    <section className="page__background">
      <EventsHall />
      <Footer />
    </section>
  );
};

export default EventCenter;
