import { combineReducers } from "redux";
import { authReducer } from "./Auth";
import { alertReducer } from "./Alert";
import { profileReducer } from "./Profile";
import { postReducer } from "./Post";

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  profile: profileReducer,
  post: postReducer,
});
