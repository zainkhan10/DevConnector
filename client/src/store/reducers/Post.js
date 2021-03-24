import {
  ADD_POST,
  DELETE_POST,
  GET_POSTS_FAILURE,
  GET_POSTS_INITIATE,
  GET_POSTS_SUCCESS,
  REMOVE_LIKES,
  UPDATE_LIKES,
} from "../actions/types";

const initState = {
  loading: false,
  post: null,
  posts: [],
  error: {},
};

export const postReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS_INITIATE:
      return { ...state, loading: true };

    case GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: payload };

    case GET_POSTS_FAILURE:
      return { ...state, loading: false, error: payload };

    case UPDATE_LIKES:
    case REMOVE_LIKES:
      const updatedPost = state.posts.map((post) =>
        post._id === payload.id ? { ...post, likes: payload.likes } : post
      );
      return { ...state, loading: false, posts: updatedPost };

    case DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post._id !== payload),
      };

    case ADD_POST:
      return { ...state, loading: false, posts: [payload, ...state.posts] };

    default:
      return state;
  }
};
