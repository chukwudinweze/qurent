import { setError, setErrorAuth, setLoading } from "./uiInteraction";

export const userEmail = () => ({
  type: "USER_EMAIL",
});

export const getToken = () => ({
  type: "TOKEN",
});

export const setUser = (data, url) => {
  return (dispatch) => {
    let user = { ...data, returnSecureToken: true };

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
            // console.log(data.error.message.toString());
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(getToken(data.idToken));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setErrorAuth(true, "error"));
      });
  };
};
