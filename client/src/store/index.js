import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/";
import { createLogger } from "redux-logger";

const logger = createLogger();
const middlewares = [thunk, logger]; // Need to remove logger on production

export const ConfigureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middlewares));
};
