export const setUserEmail = (email) => ({
  type: "USER_EMAIL",
  email,
});

export const setToken = (token) => ({
  type: "TOKEN",
  token,
});

export const setMyAds = (ads) => ({
  type: "MY_ADS",
  ads,
});

export const logOut = () => ({
  type: "LOG_OUT",
});
