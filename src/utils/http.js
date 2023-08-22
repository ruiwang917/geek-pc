import axios from "axios";

const http = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});
// add request interceptor
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// add response interceptor
http.interceptors.response.use(
  (response) => {
    // 2xx
    return response.data;
  },
  (error) => {
    // not 2xx
    return Promise.reject(error);
  }
);

export { http };
