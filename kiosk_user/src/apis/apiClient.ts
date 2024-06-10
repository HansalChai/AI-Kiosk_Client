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

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      setToken("");
      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
      window.location.href = "/admin/home"; // 페이지 리디렉트
    }
    return Promise.reject(error);
  }
);

export default apiClient;
