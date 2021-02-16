import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "../interceptors";

export const axiosInstance = axios.create({
  baseURL: "#BASE_URL",
  params: {
    api_key: "#API_KEY",
  },
});

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));
// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

const get = async () => {
  return await axiosInstance.get(`#URL`, { handlerEnabled: false });
};

export default { get };
