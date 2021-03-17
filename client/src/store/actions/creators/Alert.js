import * as uuid from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "../types";
import { actionDispatch } from "./ActionDispatcher";

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuid.v4();
  dispatch(actionDispatch(SET_ALERT, { msg, alertType, id }));
  setTimeout(() => dispatch(actionDispatch(REMOVE_ALERT, id)), timeout);
};
