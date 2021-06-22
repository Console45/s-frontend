import axios, { AxiosRequestConfig } from "axios";
import { getAccessToken } from "./accessToken";

const instance = axios.create({
  baseURL: `http://localhost:4000`,
});

export const requestConfig = (request: AxiosRequestConfig) => {
  const accessToken = getAccessToken();
  if (accessToken) request.headers["Authorization"] = `Bearer ${accessToken}`;
  return request;
};

const errorConfig = (error: any) => {
  return Promise.reject(error);
};

instance.interceptors.request.use(requestConfig, errorConfig);

export default instance;
