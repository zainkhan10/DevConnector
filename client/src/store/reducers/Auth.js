import { getFromLocal, saveToLocal, removeFromLocal } from "../../utils/cache";
import {
  ACCOUNT_DELETED,
  AUTH_ERRORS,
  LOGIN_FAILURE,
  LOGIN_INITIATE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_INITIATE,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../actions/types";

const initState = {
  loading: false,
  user: null,
  isAuthenticated: false,
  token: getFromLocal("token"),
};

export const authReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case REGISTER_INITIATE:
    case LOGIN_INITIATE:
      return { ...state, loading: true };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      saveToLocal(payload.token, "token");
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAILURE:
    case AUTH_ERRORS:
    case LOGIN_FAILURE:
    case LOGOUT:
    case ACCOUNT_DELETED:
      removeFromLocal("token");
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
        user: null,
      };

    default:
      return { ...state };
  }
};
