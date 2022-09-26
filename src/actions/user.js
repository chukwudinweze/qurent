import { Redirect } from "react-router-dom";
import { setErrorAuth, setLoading, setSuccess } from "./uiInteraction";

//  return <Redirect to="/" />;
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
    dispatch(setLoading(true));
    dispatch(setErrorAuth(false));
    Redirect("/");
    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        dispatch(setLoading(false));
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
        dispatch(setErrorAuth(true, error.message));
      });
  };
};
