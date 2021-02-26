import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { SlamReducer } from "./reducers/SlamReducer";

const store = createStore(
  SlamReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
export default store;
