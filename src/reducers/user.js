const InitialState = {
  token: "",
  email: "",
};
const user = (state = InitialState, action) => {
  switch (action.type) {
    case "TOKEN":
      return { ...state, token: action.token };
    case "USER_EMAIL":
      return { ...state, email: action.email };
    default:
      return state;
  }
};
export default user;
