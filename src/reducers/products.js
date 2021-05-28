const InitialState = [];
const products = (state = InitialState, action) => {
  console.log(`state: ${state}`);
  switch (action.type) {
    case "POST_PROPERTY":
      return [...state, action.value];
    default:
      return state;
  }
};
export default products;
