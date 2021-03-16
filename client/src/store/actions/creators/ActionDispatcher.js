export const actionDispatch = (type, payload) =>
  payload ? { type, payload } : { type };
