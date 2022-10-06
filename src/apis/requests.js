import axiosInstance from "./axios-instance";

const signIn = (data) => axiosInstance.post("/auth/signin", data);

const signUp = (data, token) => axiosInstance.post("/auth/create-user", data, { headers: { Authorization: `Bearer ${token}` } });

const validateToken = (token) => axiosInstance.get(`/auth/invites/${token}`);

export { signIn, signUp, validateToken };
