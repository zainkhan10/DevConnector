import { HttpRequest } from "../../../utils/httpRequests";
import {
  DELETE_POST,
  GET_POSTS_FAILURE,
  GET_POSTS_INITIATE,
  GET_POSTS_SUCCESS,
  REMOVE_LIKES,
  UPDATE_LIKES,
} from "../types";
import { actionDispatch } from "./ActionDispatcher";
import { setAlert } from "./";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch(actionDispatch(GET_POSTS_INITIATE));
    const response = await HttpRequest({
      method: "GET",
      uri: "/posts",
    });
    dispatch(actionDispatch(GET_POSTS_SUCCESS, response));
  } catch (err) {
    dispatch(
      actionDispatch(GET_POSTS_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const addLike = (postId) => async (dispatch) => {
  try {
    const response = await HttpRequest({
      method: "PUT",
      uri: `/posts/like/${postId}`,
    });
    dispatch(actionDispatch(UPDATE_LIKES, { id: postId, likes: response }));
  } catch (err) {
    dispatch(
      actionDispatch(GET_POSTS_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const removeLike = (postId) => async (dispatch) => {
  try {
    const response = await HttpRequest({
      method: "PUT",
      uri: `/posts/unlike/${postId}`,
    });
    dispatch(actionDispatch(REMOVE_LIKES, { id: postId, likes: response }));
  } catch (err) {
    dispatch(
      actionDispatch(GET_POSTS_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await HttpRequest({
      method: "DELETE",
      uri: `/posts/${postId}`,
    });
    dispatch(actionDispatch(DELETE_POST, postId));
    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    dispatch(
      actionDispatch(GET_POSTS_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
