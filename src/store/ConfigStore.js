import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import ReduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
  return store;
};

export default Store;
