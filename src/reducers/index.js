import { combineReducers } from "redux";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  profile: profileReducer,
  user: userReducer
});
