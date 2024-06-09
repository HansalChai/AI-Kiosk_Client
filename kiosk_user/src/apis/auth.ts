import apiClient, { setToken } from "./apiClient";

interface LoginResponse {
  token: string;
}

export const login = async (username: string, password: string) => {
  const response = await apiClient.post("/api/accounts/dj-rest-auth/login/", {
    username,
    password,
  });
  setToken(response.data.access);
  return response.data;
};
export const logout = async (): Promise<void> => {
  try {
    await apiClient.post("/api/accounts/dj-rest-auth/logout/");
    setToken("");
    console.log("Logout success");
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
export const getAdminInfo = async () => {
  const response = await apiClient.get("/api/accounts/");
  return response.data;
};
