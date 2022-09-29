let savedToken = localStorage.getItem("token");
const InitialState = {
  token: savedToken,
  email: "",
  myAdverts: [],
};
const user = (state = InitialState, action) => {
  switch (action.type) {
    case "TOKEN":
      localStorage.setItem("token", action.token);
      return { ...state, token: action.token };
    case "USER_EMAIL":
      return { ...state, email: action.email };
    case "MY_ADS":
      return { ...state, myAdverts: [...state.myAdverts, action.ads] };
    case "LOG_OUT":
      return { ...state, token: "", email: "" };
    default:
      return state;
  }
};
export default user;
