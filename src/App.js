import React from "react";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import PostAdd from "./Pages/PostAdd";
import Flat from "./Pages/Flat";
import SelfContain from "./Pages/SelfContain";
import SingleRoom from "./Pages/SingleRoom";
import Shops from "./Pages/Shops";
import OfficeSpace from "./Pages/OfficeSpace";
import EventCenter from "./Pages/EventCenter";
import Land from "./Pages/Land";
import Error from "./Pages/Error";
import "./Styles/index.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route exact path="/post-add">
          <PostAdd />
        </Route>
        <Route exact path="/flat">
          <Flat />
        </Route>
        <Route exact path="/self-contain">
          <SelfContain />
        </Route>
        <Route exact path="/single-room">
          <SingleRoom />
        </Route>
        <Route exact path="/shops">
          <Shops />
        </Route>
        <Route exact path="/office-space">
          <OfficeSpace />
        </Route>
        <Route exact path="/event-center">
          <EventCenter />
        </Route>
        <Route exact path="/land">
          <Land />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
