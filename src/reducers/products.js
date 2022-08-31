let dataFromLocalStorage = localStorage.getItem("savedItem");
const initialSavedItems = dataFromLocalStorage
  ? JSON.parse(dataFromLocalStorage)
  : [];

const initialState = {
  properties: [],
  featuredRooms: [],
  flats: [],
  singleRooms: [],
  shops: [],
  selfContain: [],
  offices: [],
  lands: [],
  eventCenters: [],
  savedProperties: initialSavedItems,
};

const products = (state = initialState, action) => {
  let duplicateData;
  switch (action.type) {
    case "POST_PROPERTY":
      return {
        ...state,
        properties: [...state.properties, action.property],
      };
    case "FETCH_DATA":
      duplicateData = state.properties.find((property) => {
        return property.id === action.data.id;
      });

      if (duplicateData) {
        return { ...state };
      } else {
        return { ...state, properties: [...state.properties, action.data] };
      }

    case "FETCH_FEATURED_ROOMS":
      duplicateData = state.featuredRooms.find((property) => {
        return property.id === action.data.id;
      });

      if (duplicateData) {
        return { ...state };
      } else {
        return {
          ...state,
          featuredRooms: [...state.featuredRooms, action.data],
        };
      }

    case "FETCH_FLATS":
      duplicateData = state.flats.find((property) => {
        return property.id === action.data.id;
      });

      if (duplicateData) {
        return { ...state };
      } else {
        return { ...state, flats: [...state.flats, action.data] };
      }

    case "FETCH_SINGLE_ROOMS":
      duplicateData = state.singleRooms.find((property) => {
        return property.id === action.data.id;
      });
      if (duplicateData) {
        return { ...state };
      } else {
        return { ...state, singleRooms: [...state.singleRooms, action.data] };
      }

    case "FETCH_SHOPS":
      duplicateData = state.stores.find((property) => {
        return property.id === action.data.id;
      });

      if (duplicateData) {
        return { ...state };
      } else {
        return { ...state, stores: [...state.stores, action.data] };
      }

    case "FETCH_SELF_CONTAIN":
      duplicateData = state.selfContain.find((property) => {
        return property.id === action.data.id;
      });

      if (duplicateData) {
        return { ...state };
      } else {
        return { ...state, selfContain: [...state.selfContain, action.data] };
      }

    case "FETCH_OFFICES":
      duplicateData = state.offices.find((property) => {
        return property.id === action.data.id;
      });

      if (duplicateData) {
        return { ...state };
      } else {
        return { ...state, offices: [...state.offices, action.data] };
      }

    case "FETCH_LANDS":
      duplicateData = state.lands.find((property) => {
        return property.id === action.data.id;
      });

      if (duplicateData) {
        return { ...state };
      } else {
        return { ...state, lands: [...state.lands, action.data] };
      }
    case "FETCH_SAVED_PROPERTIES":
      duplicateData = state.savedProperties.find((property) => {
        return property.id === action.data.id;
      });

      if (duplicateData) {
        return { ...state };
      } else {
        const savedState = [...state.savedProperties, action.data];
        const serialisedState = JSON.stringify(savedState);
        localStorage.setItem("savedItem", serialisedState);
        console.log("nothing in the console");
        return {
          ...state,
          savedProperties: [...state.savedProperties, action.data],
        };
      }
    case "REMOVE_SAVED_PROPERTIES":
      let updatedItems = state.savedProperties.filter((property) => {
        return property.id !== action.id;
      });

      const serialisedState = JSON.stringify(updatedItems);
      console.log(serialisedState);
      localStorage.setItem("savedItem", serialisedState);
      return { ...state, savedProperties: [...updatedItems] };
    default:
      return state;
  }
};
export default products;
