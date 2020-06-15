import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./../reducer/userReducer";

export default () => {
  const store = createStore(
    userReducer,
    applyMiddleware(thunk)
  );
  return store;
};
