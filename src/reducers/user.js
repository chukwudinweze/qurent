const InitialState = {
  token: "",
  email: "",
  myAdverts: [],
};
const user = (state = InitialState, action) => {
  switch (action.type) {
    case "TOKEN":
      return { ...state, token: action.token };
    case "USER_EMAIL":
      return { ...state, email: action.email };
    case "MY_ADS":
      return { ...state, myAdverts: [...state.myAdverts, action.ads] };
    default:
      return state;
  }
};
export default user;
