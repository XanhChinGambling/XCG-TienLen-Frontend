import axios from "axios";
import { API_BASE } from "@/constants/Common";
import authStore from "@/context/AuthContext";

const BackendWebClient = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// ========== Request Interceptor ==========
BackendWebClient.interceptors.request.use(
  (config) => {
    const token = authStore.getState().accessToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(new Error(error?.message ?? String(error)))
);

// ========== Response Interceptor ==========
let isRefreshing = false;
let refreshQueue: (() => void)[] = [];

BackendWebClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Nếu không phải lỗi 401 hoặc đã xử lý rồi.
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

    // Đánh dấu đã retry.
    originalRequest._retry = true;
    const auth = authStore.getState();

    // Nếu chưa đang refresh thì gọi refresh.
    if (!isRefreshing) {
      isRefreshing = true;

      try {
        await auth.refreshToken();
        isRefreshing = false;

        // Gửi lại các request trong hàng đợi.
        refreshQueue.forEach((cb) => cb());
        refreshQueue = [];

        // Gắn token mới và gửi lại request gốc.
        const newToken = authStore.getState().accessToken;
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        // use in prod
        // setTimeout(() => window.location.reload(), 3000);
        return Promise.reject(new Error(String(refreshError)));
      }
    }

    // --- Nếu đang refresh: xếp request vào hàng đợi ---
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
