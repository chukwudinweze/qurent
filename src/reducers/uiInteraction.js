const InitialState = {
  expand: false,
  loading: false,
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
    default:
      return state;
  }
};
export default uiInteraction;
