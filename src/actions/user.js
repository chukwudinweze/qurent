import { Redirect } from "react-router-dom";
import { setAuthLoading, setErrorAuth, setSuccess } from "./uiInteraction";

export const setUserEmail = (email) => ({
  type: "USER_EMAIL",
  email,
});

export const setToken = (token) => ({
  type: "TOKEN",
  token,
});

export const setUser = (data, url) => {
  return (dispatch) => {
    let user = data;

    dispatch(setSuccess(false));
    dispatch(setAuthLoading(true));
    dispatch(setErrorAuth(false));
    // redirect to the homepage
    Redirect("/");
    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        dispatch(setAuthLoading(false));
        if (response.ok) {
          return response.json();
        } else {
          const data = await response.json();
          let errorMessage = `${data.error.message}!!`;
          throw new Error(errorMessage);
        }
      })
      .then((data) => {
        dispatch(setToken(data.idToken));
        dispatch(setUserEmail(data.email));
        dispatch(setSuccess(true));
      })
      .catch((error) => {
        dispatch(setAuthLoading(false));
        dispatch(setErrorAuth(true, error.message));
      });
  };
};
