import axios from "axios";
const baseURL = "https://partnerstagingapi.pakam.ng/api/";

const RequestErrors = Object.freeze({
  UNAUTHENTICATED: {
    code: 401,
    message: "Authentication credentials were not provided.",
  },
  TOKEN_EXPIRY: {
    code: 401,
    message: "Token time out. Login again",
  },
});

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    version: 2.1,
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("lasepa_admin_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.version = "2.1";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.data?.status === RequestErrors.TOKEN_EXPIRY) {
      localStorage.clear();
      window.location.reload();
      window.location.href = window.location.origin + "/auth";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
