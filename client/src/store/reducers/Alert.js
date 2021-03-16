import { REMOVE_ALERT, SET_ALERT } from "../actions/types";

const initState = [];

export const alertReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      break;
  }
};
