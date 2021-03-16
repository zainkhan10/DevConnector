import axios from "axios";
import { getFromLocal } from "./cache";

export const HttpRequest = async ({
  method,
  uri,
  data,
  withToken = false,
  params = null,
}) => {
  const url = `/api${uri}`;
  const configuration = { method, url };
  configuration.header = formatHeaders(withToken);
  if (params) configuration.params = params;
  if (
    method === "post" ||
    method === "put" ||
    method === "delete" ||
    method === "patch"
  ) {
    configuration.data = data;
  }
  const response = await axios(configuration);
  return response.data;
};

const formatHeaders = async (withToken) => {
  const token = await getFromLocal("token");
  let headers = {
    "Content-Type": "application/json",
  };
  if (withToken) return { ...headers, "x-auth-token": token };
  return { ...headers };
};
