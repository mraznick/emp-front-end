import api from "./apiConfig.js";

export const getComments = async () => {
  try {
    const response = await api.get('/comments');
    return response.data
  } catch (error) {
    throw error;
  }
};

export const getComment = async () => {
  try {
    const response = await api.get(`/comments/${id}`);
    return response.data
  } catch (error) {
    throw error;
  }
}

export const createComment = async () => {
  try {
    const response = await api.post('/comments');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (comment) => {
  try {
    const response = await api.put(`/comments/${id}`, comment);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (comment) => {
  try {
    const response = await api.delete(`/comments/${id}`, comment)
    return response.data;
  } catch (error) {
    throw error;
  }
};