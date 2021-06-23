const initialState = {
  properties: [],
  savedProperties: [],
};
const products = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PROPERTY":
      return {
        ...state,
        properties: [...state.properties, action.property],
      };
    // case "ADD_TO_SAVED_PROPERTY":
    //   return state.properties.find((property) => {
    //     if (property.id === action.id) {
    //       return {
    //         ...state,
    //         savedProperties: [...state.savedProperties, action.property],
    //       };
    //     }
    //     return state.savedProperties;
    //   });
    default:
      return state;
  }
};
export default products;
