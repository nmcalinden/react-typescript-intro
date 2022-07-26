import Axios, { AxiosRequestConfig } from "axios";
import JwtHandler from "../utils/jwt";

function authRequestInterceptor(config: AxiosRequestConfig) {
    const token: string = JwtHandler.getToken();
    if (!config?.headers) {
        throw new Error(
            `Expected 'config' and 'config.headers' not to be undefined`
        );
    }
    config.headers.authorization = token ? `${token}` : "";
    config.headers.Accept = "application/json";
    return config;
}

export const axios = Axios.create({
    baseURL: "http://localhost:8081",
});

axios.interceptors.request.use(authRequestInterceptor);
