import uuid from "uuid";
import { SET_ALERT } from "../types";
import { actionDispatch } from "./ActionDispatcher";

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid.v4();
  dispatch(actionDispatch(SET_ALERT, { msg, alertType, id }));
};

