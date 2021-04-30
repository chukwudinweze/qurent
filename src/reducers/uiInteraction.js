const InitialState = {
  expand: false,
};
const uiInteraction = (state = InitialState, action) => {
  switch (action.type) {
    case "EXPAND_FOOTER":
      return {
        ...state,
        expand: !state.expand,
      };
    default:
      return state;
  }
};
export default uiInteraction;
