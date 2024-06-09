import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (newToken: string) => {
  if (newToken) {
    localStorage.setItem("token", newToken);
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
  } else {
    localStorage.removeItem("token");
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

const token = localStorage.getItem("token");
if (token) {
  setToken(token);
}

export default apiClient;
