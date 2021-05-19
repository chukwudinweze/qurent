import { MenuItem } from "@material-ui/core";
import React from "react";
import Locations from "./Locations";

const RenderLocation = (location) => {
  switch (location) {
    case "Nsukka":
      return React.Children.toArray(
        Locations.nsukka.map((location) => (
          <MenuItem value={location}>{location}</MenuItem>
        ))
      );
    case "Igbo Etiti":
      return React.Children.toArray(
        Locations.igboEtiti.map((location) => (
          <MenuItem value={location}>{location}</MenuItem>
        ))
      );
    case "Igbo-eze North":
      return React.Children.toArray(
        Locations.igboEzeNorth.map((location) => (
          <MenuItem value={location}>{location}</MenuItem>
        ))
      );
    case "Igbo-eze South":
      return React.Children.toArray(
        Locations.igboEzeSouth.map((location) => (
          <MenuItem value={location}>{location}</MenuItem>
        ))
      );
    case "Udenu":
      return React.Children.toArray(
        Locations.udenu.map((location) => (
          <MenuItem value={location}>{location}</MenuItem>
        ))
      );
    case "Uzo Uwani":
      return React.Children.toArray(
        Locations.uzoUwani.map((location) => (
          <MenuItem value={location}>{location}</MenuItem>
        ))
      );
    default:
      return;
  }
};

export default RenderLocation;
