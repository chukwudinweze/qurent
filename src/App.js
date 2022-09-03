import React, { useEffect } from "react";
import Home from "./Pages/Home";
import PostAdd from "./Pages/PostAdd";
import Flat from "./Pages/Flat";
import SelfContain from "./Pages/SelfContain";
import SingleRoomPage from "./Pages/SingleRoomPage";
import Shops from "./Pages/Shops";
import OfficeSpace from "./Pages/OfficeSpace";
import EventCenter from "./Pages/EventCenter";
import Land from "./Pages/Land";
import Qservices from "./Pages/Qservices";
import Error from "./Pages/Error";
import "./Styles/index.css";
import { Route, Switch } from "react-router-dom";
import PropertyDetailPage from "./Pages/PropertyDetailPage";
import SavedAds from "./Pages/SavedAds";
import UserProfile from "./Pages/UserProfile";
import NavLinks from "./components/NavLinks";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useSelector } from "react-redux";
import useFetchData from "./components/useFetchApi";
import { setFetchData } from "./actions/products";
import AllpropertiesPage from "./Pages/AllpropertiesPage";

// overides blue color as the primary color from material ui
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#20c063",
      light: "#20c063",
      dark: "#20c063",
    },
  },
});

function App() {
  const url = "https://qurent-a1b03-default-rtdb.firebaseio.com/property.json";
  const { fetchData } = useFetchData(url, setFetchData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const success = useSelector((state) => state.uiInteraction.sucess);
  return (
    //  themeProvider applies the custom theme to post app component
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/post-ads">
          <PostAdd />
        </Route>

        <Route exact path="/flat">
          <Flat />
        </Route>

        <Route exact path="/self-contain">
          <SelfContain />
        </Route>

        <Route exact path="/single-room">
          <SingleRoomPage />
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

        <Route exact path="/services">
          <Qservices />
        </Route>

        <Route exact path="/properties">
          <AllpropertiesPage />
        </Route>

        <Route exact path="/properties/:id">
          <PropertyDetailPage />
        </Route>

        <Route exact path="/saved-ads">
          <SavedAds />
        </Route>

        <Route exact path="/profile">
          <UserProfile />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
      <NavLinks />
    </ThemeProvider>
  );
}

export default App;
