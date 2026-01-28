import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, {
  type AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import type { ApiResponse } from "../types/api";

// School - CCIS_DEANS
const baseURL = `http://192.168.31.249:8000/api`;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export async function apiGet<T>(url: string, config?: AxiosRequestConfig) {
  const { data } = await api.get<ApiResponse<T>>(url, config);
  return data;
}

export async function apiPost<T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
) {
  const { data } = await api.post<ApiResponse<T>>(url, body, config);
  return data;
}

export async function apiPut<T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
) {
  const { data } = await api.put<ApiResponse<T>>(url, body, config);
  return data;
}

export async function apiDelete<T>(url: string, config?: AxiosRequestConfig) {
  const { data } = await api.delete<ApiResponse<T>>(url, config);
  return data;
}

export default api;
