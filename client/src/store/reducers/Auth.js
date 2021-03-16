import { REGISTER_INITIATE } from "../actions/types";

const initState = {
  loading: false,
  user: null,
  isLoggedin: false,
  token: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_INITIATE:
      return { ...state, loading: true };

    default:
      return { ...state };
  }
};
