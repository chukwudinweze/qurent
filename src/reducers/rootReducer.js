import { combineReducers } from "redux";
import user from "./user";
import products from "./products";
import uiInteraction from "./uiInteraction";

const rootReducer = combineReducers({
  user,
  products,
  uiInteraction,
});
export default rootReducer;
