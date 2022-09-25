import { setError, setErrorAuth, setLoading } from "./uiInteraction";

export const getUserEmail = (email) => ({
  type: "USER_EMAIL",
  email,
});

export const getToken = (token) => ({
  type: "TOKEN",
  token,
});

export const setUser = (data, url) => {
  return (dispatch) => {
    let user = data;

    dispatch(setLoading(true));
    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        dispatch(setLoading(false));
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = `${data.error.message}!!`;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("data", data);
        dispatch(getToken(data.idToken));
        dispatch(getUserEmail(data.email));
      })
      .catch((error) => {
        dispatch(setErrorAuth(true, error.message));
      });
  };
};
