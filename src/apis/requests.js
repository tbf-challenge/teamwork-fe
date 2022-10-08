import axios from "axios";
import { baseURL } from "./axios-instance";

const signUp = (data, token) => axios.post("/auth/create-user", data, {
  headers: { Authorization: `Bearer ${token}` }
});

const validateToken = (token) => axios.get(`/auth/invites/${token}`);

const signIn = (data) => axios.post(`${baseURL}/auth/signin/`, data);

const inviteEmployee = (axiosInstance, data = {}) => axiosInstance.post("/auth/create-user", data);

const fetchTags = async (axiosInstance) => axiosInstance.get("/tags/");

const fetchArticles = async (axiosInstance) => axiosInstance.get("/articles/");

const fetchUsers = async (axiosInstance) => axiosInstance.get("/users/");

const fetchPosts = async (axiosInstance) => {
  return axiosInstance.get("/feed/");
};

export {
  signIn,
  inviteEmployee,
  fetchPosts,
  fetchArticles,
  fetchTags,
  fetchUsers,
  signUp,
  validateToken
};
