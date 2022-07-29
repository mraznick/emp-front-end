import api from "./apiConfig.js";

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
    const response = await api.post(`/users`, user)
    return response.data
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (user) => {
  try {
    const response = await api.put(`/users/${id}`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (user) => {
  try {
    const response = await api.delete(`/users/${id}`, user);
    return response.data
  } catch (error) {
    throw error;
  }
};