import { HttpRequest } from "../../../utils/httpRequests";
import {
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_PROFILE_FAILURE,
  GET_PROFILE_INITIATE,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE,
  GET_PROFILES_INITIATE,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAILURE,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAILURE,
  GET_REPOS_INITIATE,
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

export const getProfiles = () => async (dispatch) => {
  try {
    dispatch(actionDispatch(CLEAR_PROFILE));
    dispatch(actionDispatch(GET_PROFILES_INITIATE));
    const response = await HttpRequest({ method: "GET", uri: "/profile" });
    dispatch(actionDispatch(GET_PROFILES_SUCCESS, response));
  } catch (err) {
    dispatch(
      actionDispatch(GET_PROFILES_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const getProfileById = (userID) => async (dispatch) => {
  try {
    dispatch(actionDispatch(GET_PROFILE_INITIATE));
    const response = await HttpRequest({
      method: "GET",
      uri: `/profile/user/${userID}`,
    });
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

export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const response = await HttpRequest({
      method: "GET",
      uri: `/profile/github/${username}`,
    });
    dispatch(actionDispatch(GET_REPOS_SUCCESS, response));
  } catch (err) {
    dispatch(
      actionDispatch(GET_REPOS_FAILURE, {
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

export const deleteExperience = (id) => async (dispatch) => {
  try {
    dispatch(actionDispatch(GET_PROFILE_INITIATE));
    const response = await HttpRequest({
      method: "delete",
      uri: `/profile/experience/${id}`,
    });
    dispatch(actionDispatch(UPDATE_PROFILE, response));
    dispatch(setAlert("Expeirence Removed", "success"));
  } catch (err) {
    actionDispatch(GET_PROFILE_FAILURE, {
      msg: err.response.statusText,
      status: err.response.status,
    });
  }
};

export const deleteEducation = (id) => async (dispatch) => {
  try {
    dispatch(actionDispatch(GET_PROFILE_INITIATE));
    const response = await HttpRequest({
      method: "delete",
      uri: `/profile/education/${id}`,
    });
    dispatch(actionDispatch(UPDATE_PROFILE, response));
    dispatch(setAlert("Education Removed", "success"));
  } catch (err) {
    actionDispatch(GET_PROFILE_FAILURE, {
      msg: err.response.statusText,
      status: err.response.status,
    });
  }
};

export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await HttpRequest({
        method: "delete",
        uri: "/profile",
      });
      dispatch(actionDispatch(CLEAR_PROFILE));
      dispatch(actionDispatch(ACCOUNT_DELETED));
      dispatch(
        setAlert("Your account has been permanantly deleted", "success")
      );
    } catch (err) {
      actionDispatch(GET_PROFILE_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      });
    }
  }
};
