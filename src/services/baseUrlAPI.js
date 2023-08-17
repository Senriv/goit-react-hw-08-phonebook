import axios from "axios";

export const baseUrlAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});