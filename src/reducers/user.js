const InitialState = {
  toke: "",
  email: "",
};
const user = (state = InitialState, action) => {
  switch (action.type) {
    case "TOKEN":
      return { ...InitialState, token: action.token };
    case "EMAIL":
      return { ...InitialState, token: action.token };
    default:
      return state;
  }
};
export default user;
