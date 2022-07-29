import api from "./apiConfig.js";
//NOT OPERATING; NEED TO UPDATE APICONFIG FILE

export const getPictures = async () => {
  try {
    const response = await api.get("/pictures")
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPicture = async (id) => {
  try {
    const response = await api.get(`/picture/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

