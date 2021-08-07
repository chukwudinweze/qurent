const initialState = {
  properties: [],
  featuredRooms: [],
  flats: [],
  singleRooms: [],
  stores: [],
  selfContain: [],
  offices: [],
  lands: [],
  savedProperties: [],
};
const products = (state = initialState, action) => {
  switch (action.type) {
    case "POST_PROPERTY":
      return {
        ...state,
        properties: [...state.properties, action.property],
      };
    case "FETCH_DATA":
      return { ...state, properties: [...state.properties, action.data] };
    case "FETCH_FEATURED_ROOMS":
      return { ...state, featuredRooms: [...state.featuredRooms, action.data] };

    case "FETCH_FLATS":
      return { ...state, flats: [...state.flats, action.data] };

    case "FETCH_SINGLE_ROOMS":
      return { ...state, singleRooms: [...state.singleRooms, action.data] };

    case "FETCH_STORES":
      return { ...state, stores: [...state.stores, action.data] };

    case "FETCH_SELF_CONTAIN":
      return { ...state, selfContain: [...state.selfContain, action.data] };

    case "FETCH_OFFICES":
      return { ...state, offices: [...state.offices, action.data] };

    case "FETCH_LANDS":
      return { ...state, lands: [...state.lands, action.data] };

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
