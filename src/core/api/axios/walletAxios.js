import axios from "axios";
import { reqInterceptor } from "../interceptor/request-interceptor";
import { resInterceptor } from "../interceptor/response-interceptor";

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

// export const baseURL = process.env.REACT_APP_BASE_URL;
export const baseURL = process.env.REACT_APP_NEW_WALLET_URL;

const axiosInstance = axios.create({
  headers: {
    version: "2.1",
  },
  baseURL,
});

axiosInstance.interceptors.request.use(reqInterceptor, (err) =>
  console.log(err)
);

export const axiosInstanceV2 = axios.create({
  baseURL:
    // process.env.NODE_ENV === "development"
    // ? "http://localhost:4000"vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html
    process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(reqInterceptor, (err) =>
  console.log(err)
);

axiosInstance.interceptors.response.use(resInterceptor, (err) => {
  console.log(err)
  if (
    err.response?.data?.statusCode === RequestErrors.TOKEN_EXPIRY.code ||
    err.response?.status === RequestErrors.TOKEN_EXPIRY.code
  ) {

    // console.log(response?.data?.statusCode, response?.status)

    localStorage.clear();
    window.location.reload();
  }

  return Promise.reject(err);
});

export default axiosInstance;
