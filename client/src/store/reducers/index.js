import { combineReducers } from "redux";
import { authReducer } from "./Auth";
import { alertReducer } from "./Alert";
export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
});
