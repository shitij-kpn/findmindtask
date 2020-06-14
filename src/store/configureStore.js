import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./../reducer/userReducer";

export default () => {
  const store = createStore(
    userReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};
