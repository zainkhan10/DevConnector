import { combineReducers } from "redux";
import { authReducer } from "./Auth";
import { alertReducer } from "./Alert";
import { profileReducer } from "./Profile";
export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  profile: profileReducer,
});
