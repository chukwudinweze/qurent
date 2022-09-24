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
    try {
      console.log("hgggggggggggggggggg");
      const handleAuth = async (userData) => {
        dispatch(setLoading(true));
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(userData),
        });
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error("Upload unsuccessful, Please try again later");
          });
        }
        const data = await response.json();
        console.log(data);
      };
      handleAuth(user);
    } catch (error) {
      console.log(error);
      dispatch(setErrorAuth(true));
    }
    dispatch(setLoading(false));
  };
};
