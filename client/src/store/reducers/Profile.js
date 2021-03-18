import {
  CLEAR_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_INITIATE,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE,
} from "../actions/types";

const initState = {
  loading: false,
  profile: null,
  profiles: [],
  error: null,
  repos: [],
};

export const profileReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE_INITIATE:
      return { ...state, loading: true };

    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE:
      return { ...state, loading: false, profile: payload };

    case GET_PROFILE_FAILURE:
      return { ...state, loading: false, error: payload };

    case CLEAR_PROFILE:
      return {
        ...state,
        loading: false,
        profile: null,
        profiles: [],
        error: null,
        repos: [],
      };

    default:
      return state;
  }
};
