import { HttpRequest } from "../../../utils/httpRequests";
import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_INITIATE,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE,
} from "../types";
import { actionDispatch } from "./ActionDispatcher";
import { setAlert } from "./Alert";

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

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const response = await HttpRequest({
      method: "post",
      uri: "/profile",
      data: formData,
    });
    dispatch(actionDispatch(GET_PROFILE_SUCCESS, response));
    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    if (!edit) history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors)
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch(
      actionDispatch(GET_PROFILE_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const response = await HttpRequest({
      method: "put",
      uri: "/profile/experience",
      data: formData,
    });
    dispatch(actionDispatch(UPDATE_PROFILE, response));
    dispatch(setAlert("Experience Added", "success"));
    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors)
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch(
      actionDispatch(GET_PROFILE_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const response = await HttpRequest({
      method: "put",
      uri: "/profile/education",
      data: formData,
    });
    dispatch(actionDispatch(UPDATE_PROFILE, response));
    dispatch(setAlert("Education Added", "success"));
    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors)
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    dispatch(
      actionDispatch(GET_PROFILE_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
