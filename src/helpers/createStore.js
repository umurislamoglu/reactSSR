import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/reducers";
import axios from "axios";
import constants from "../client/constants";

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: constants.url,
    headers: { cookie: req.get("cookie") || "" },
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
