let savedToken = localStorage.getItem("token");
let savedEmail = localStorage.getItem("email");
const InitialState = {
  token: savedToken,
  email: savedEmail,
  myAdverts: [],
};
const user = (state = InitialState, action) => {
  switch (action.type) {
    case "TOKEN":
      localStorage.setItem("token", action.token);
      return { ...state, token: action.token };
    case "USER_EMAIL":
      localStorage.setItem("email", action.email);
      return { ...state, email: action.email };
    case "MY_ADS":
      return { ...state, myAdverts: [...state.myAdverts, action.ads] };
    case "LOG_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      return { ...state, token: "", email: "" };
    default:
      return state;
  }
};
export default user;
