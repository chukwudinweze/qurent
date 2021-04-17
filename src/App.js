import React from "react";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
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
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
