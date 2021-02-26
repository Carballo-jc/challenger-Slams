import { combineReducers } from "redux";
import { SlamReducer } from "./SlamReducer";

export default combineReducers({
  slams: SlamReducer,
});
