const InitialState = {
  token: "",
  email: "",
};
const user = (state = InitialState, action) => {
  switch (action.type) {
    case "TOKEN":
      return { ...InitialState, token: action.token };
    case "USER_EMAIL":
      return { ...InitialState, token: action.token };
    default:
      return state;
  }
};
export default user;
