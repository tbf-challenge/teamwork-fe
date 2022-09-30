import axiosInstance from "./axios-instance";

const signIn = (data) => axiosInstance.post("/auth/signin", data);

const inviteEmployee = (data) => axiosInstance.post("/auth/create-user", data);

export { signIn, inviteEmployee };
