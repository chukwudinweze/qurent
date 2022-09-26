const InitialState = {
  token: "",
  email: "",
};
const user = (state = InitialState, action) => {
  switch (action.type) {
    case "TOKEN":
      console.log("i am hereeee");
      return { ...state, token: action.token };
    case "USER_EMAIL":
      console.log("i am not hereeee");
      return { ...state, email: action.email };
    default:
      return state;
  }
};
export default user;
