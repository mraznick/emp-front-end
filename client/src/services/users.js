import api from "./apiConfig.js";
import jwtDecode from "jwt-decode";

export const login = async (userData) => {
  try {
    const response = await api.post("/users/login", userData);
    localStorage.setItem("token", response.data.token)
    const user = jwtDecode(response.data.token)
    return user.id
  } catch (error) {
    throw error;
  }
}

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await api.get(`/users/${email}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await api.post(`/users/register`, user)
    localStorage.setItem("token", response.data.token)
    const user = jwtDecode(response.data.token)
    return user.id
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await api.put(`/users/${id}`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id, user) => {
  try {
    const response = await api.delete(`/users/${id}`, user);
    return response.data
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem("token")
    const user = jwtDecode(token)
    return user.id
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token")
    return true
  } catch (error) {
    throw error;
  }
};