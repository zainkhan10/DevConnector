import {
  CLEAR_PROFILE,
  GET_PROFILES_FAILURE,
  GET_PROFILES_INITIATE,
  GET_PROFILES_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_INITIATE,
  GET_PROFILE_SUCCESS,
  GET_REPOS_FAILURE,
  GET_REPOS_INITIATE,
  GET_REPOS_SUCCESS,
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
    case GET_PROFILES_INITIATE:
    case GET_REPOS_INITIATE:
      return { ...state, loading: true };

    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE:
      return { ...state, loading: false, profile: payload };

    case GET_PROFILES_SUCCESS:
      return { ...state, loading: false, profiles: payload };

    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: payload };

    case GET_PROFILE_FAILURE:
    case GET_PROFILES_FAILURE:
    case GET_REPOS_FAILURE:
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
