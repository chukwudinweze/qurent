import { setError, setErrorAuth, setLoading } from "./uiInteraction";

export const userEmail = () => ({
  type: "USER_EMAIL",
});

export const getToken = () => ({
  type: "TOKEN",
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
      })
      .catch((error) => {
        dispatch(setErrorAuth(true, error.message));
      });
  };
};
