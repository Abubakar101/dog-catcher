import axios from "axios";
import { CallBreedApiFunc, GetRandomBreedDataFunc } from "./types";

export const CallBreedApi: CallBreedApiFunc = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const getRandomBreedData: GetRandomBreedDataFunc = (length, data) => {
  const randomNumber = Math.floor(length * Math.random());
  return data[randomNumber];
};
