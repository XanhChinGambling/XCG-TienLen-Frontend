import axios from "axios";
import { API_BASE } from "@/constants/Enviroment";
import authStore from "@/context/AuthContext";

const BackendWebClient = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

BackendWebClient.interceptors.request.use(
  (config) => {
    const token = authStore.getState().accessToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(new Error(error?.message ?? String(error)))
);

let isRefreshing = false;
let refreshQueue: (() => void)[] = [];

BackendWebClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status !== 401 ||
      originalRequest._retry ||
      originalRequest.url.includes("/auth/refresh")
    ) {
      console.error("Axios response error:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        headers: error.response?.headers,
        config: error.config,
      });

      // use in prod
      // setTimeout(() => window.location.reload(), 3000);
      return Promise.reject(new Error(error?.message ?? String(error)));
    }

    originalRequest._retry = true;
    const auth = authStore.getState();

    if (!isRefreshing) {
      isRefreshing = true;

      try {
        await auth.refreshToken();
        isRefreshing = false;

        refreshQueue.forEach((cb) => cb());
        refreshQueue = [];

        const newToken = authStore.getState().accessToken;
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        // use in prod
        // setTimeout(() => window.location.reload(), 3000);
        return Promise.reject(new Error(String(refreshError)));
      }
    }

    return new Promise((resolve) => {
      refreshQueue.push(() => {
        const newToken = authStore.getState().accessToken;
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        resolve(axios(originalRequest));
      });
    });
  }
);

export default BackendWebClient;
