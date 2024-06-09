import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (newToken: string) => {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
};

export default apiClient;
