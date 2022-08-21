const InitialState = {
  expand: false,
  loading: false,
  error: false,
  errorMsg: "",
  success: false,
  successMsg: "",
};
const uiInteraction = (state = InitialState, action) => {
  switch (action.type) {
    case "EXPAND_FOOTER":
      return {
        ...state,
        expand: !state.expand,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.value,
      };
    case "SUCCESS_MESSAGE":
      return {
        ...state,
        success: true,
        successMsg: action.value,
      };
    case "ERROR":
      return {
        ...state,
        error: true,
        errorMsg: action.errorMsg,
      };
    case "ERROR_MESSAGE":
      return {
        ...state,
        errorMsg: action.message,
      };
    default:
      return state;
  }
};
export default uiInteraction;
