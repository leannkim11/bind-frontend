import { combineReducers } from "redux";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import jobReducer from "./jobReducer";

export default combineReducers({
  profile: profileReducer,
  user: userReducer,
  job: jobReducer
});
