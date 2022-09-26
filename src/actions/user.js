import { setErrorAuth, setLoading } from "./uiInteraction";

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

    dispatch(setLoading(true));
    dispatch(setErrorAuth(false));
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
        dispatch(setToken("data.idToken"));
        dispatch(setUserEmail("hhhh"));
        console.log("dispatched");
      })
      .catch((error) => {
        dispatch(setErrorAuth(true, error.message));
      });
  };
};
