import { HttpRequest } from "../../../utils/httpRequests";
import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_POST,
  GET_POSTS_FAILURE,
  GET_POSTS_INITIATE,
  GET_POSTS_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_INITIATE,
  GET_POST_SUCCESS,
  REMOVE_COMMENT,
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

export const getPostbyId = (postId) => async (dispatch) => {
  try {
    dispatch(actionDispatch(GET_POST_INITIATE));
    const response = await HttpRequest({
      method: "GET",
      uri: `/posts/${postId}`,
    });
    dispatch(actionDispatch(GET_POST_SUCCESS, response));
  } catch (err) {
    dispatch(
      actionDispatch(GET_POST_FAILURE, {
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

export const addPost = (DTO) => async (dispatch) => {
  try {
    const response = await HttpRequest({
      method: "post",
      uri: `/posts`,
      data: DTO,
    });
    dispatch(actionDispatch(ADD_POST, response));
    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch(
      actionDispatch(GET_POSTS_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const addComment = (postId, DTO) => async (dispatch) => {
  try {
    const response = await HttpRequest({
      method: "post",
      uri: `/posts/comment/${postId}`,
      data: DTO,
    });
    dispatch(actionDispatch(ADD_COMMENT, response));
    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch(
      actionDispatch(GET_POSTS_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await HttpRequest({
      method: "delete",
      uri: `/posts/comment/${postId}/${commentId}`,
    });
    dispatch(actionDispatch(REMOVE_COMMENT, commentId));
    dispatch(setAlert("Comment Removed", "success"));
  } catch (err) {
    dispatch(
      actionDispatch(GET_POSTS_FAILURE, {
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
