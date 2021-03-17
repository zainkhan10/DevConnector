import { setAuthToken } from "../../../utils/authToken";
import { getFromLocal } from "../../../utils/cache";
import { HttpRequest } from "../../../utils/httpRequests";
import {
  AUTH_ERRORS,
  CLEAR_PROFILE,
  LOGIN_FAILURE,
  LOGIN_INITIATE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_INITIATE,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../types";
import { actionDispatch } from "./ActionDispatcher";
import { setAlert } from "./Alert";

export const loadUser = () => async (dispatch) => {
  const token = getFromLocal("token");
  if (token) {
    setAuthToken(token);
    try {
      const response = await HttpRequest({
        method: "get",
        uri: "/auth",
      });
      dispatch(actionDispatch(USER_LOADED, response));
    } catch (err) {
      dispatch(actionDispatch(AUTH_ERRORS));
    }
  }
};

export const registerUser = (DTO) => async (dispatch) => {
  dispatch(actionDispatch(REGISTER_INITIATE));
  try {
    const response = await HttpRequest({
      method: "post",
      uri: "/users",
      data: DTO,
    });
    dispatch(actionDispatch(REGISTER_SUCCESS, response));
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors)
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch(actionDispatch(REGISTER_FAILURE));
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(actionDispatch(LOGIN_INITIATE));
  try {
    const response = await HttpRequest({
      method: "post",
      uri: "/auth",
      data: { email, password },
    });
    dispatch(actionDispatch(LOGIN_SUCCESS, response));
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors)
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch(actionDispatch(LOGIN_FAILURE));
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(actionDispatch(LOGOUT));
  dispatch(actionDispatch(CLEAR_PROFILE));
};
