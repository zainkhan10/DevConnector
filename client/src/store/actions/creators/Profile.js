import { HttpRequest } from "../../../utils/httpRequests";
import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_INITIATE,
  GET_PROFILE_SUCCESS,
} from "../types";
import { actionDispatch } from "./ActionDispatcher";

export const getCurrentProfile = () => async (dispatch) => {
  try {
    dispatch(actionDispatch(GET_PROFILE_INITIATE));
    const response = await HttpRequest({ method: "GET", uri: "/profile/me" });
    dispatch(actionDispatch(GET_PROFILE_SUCCESS, response));
  } catch (err) {
    dispatch(
      actionDispatch(GET_PROFILE_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
