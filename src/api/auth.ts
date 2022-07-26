import axios from "axios";
import { User } from "../types/auth";

export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginResponse = {
    token: string;
};

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
    return await axios.post("/login", data);
};

export const getCurrentUser = async (id: number): Promise<User> => {
    return await axios.get(`/users/${id}`);
};

const AuthApi = {
    login,
    getCurrentUser,
};

export default AuthApi;
