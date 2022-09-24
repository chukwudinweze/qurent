export const userEmail = () => ({
  type: "USER_EMAIL",
});

export const getToken = () => ({
  type: "TOKEN",
});

export const setUser = async (data, url) => {
  //   const response = await fetch(url);
  console.log(data, url);
  //   return (dispatch) => {
  //     dispatch(userEmail(data));
  //   };
};
