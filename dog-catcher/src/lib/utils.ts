import axios from "axios";

export const callBreedApi = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const getRandomBreedData = (length, data) => {
  const randomNumber = Math.floor(length * Math.random());
  return data[randomNumber];
};
