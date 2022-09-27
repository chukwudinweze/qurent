const InitialState = {
  expand: false,
  loading: false,
  authLoading: false,
  error: false,
  errorUpload: false,
  errorAuth: false,
  errorMsg: "",
  success: false,
  successMsg: "",
  successUpload: "",
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
    case "SET_SUCCESS":
      return {
        ...state,
        success: action.value,
        successMsg: action.successMsg,
      };
    case "ERROR":
      return {
        ...state,
        error: action.value,
        errorMsg: action.errorMsg,
      };
    case "ERROR_MESSAGE":
      return {
        ...state,
        errorMsg: action.message,
      };
    case "ERROR__UPLOAD":
      return {
        ...state,
        errorUpload: action.value,
        errorMsg: action.errorMsg,
      };
    case "ERROR__AUTH":
      return {
        ...state,
        errorAuth: action.value,
        errorMsg: action.errorMsg,
      };
    case "AUTH__LOADING":
      return {
        ...state,
        authLoading: action.value,
        errorMsg: action.errorMsg,
      };
    case "SUCCESS__UPLOAD":
      return {
        ...state,
        successUpload: action.value,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
export default uiInteraction;
