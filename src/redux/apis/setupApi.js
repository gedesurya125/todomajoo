import axios from 'axios';
export const baseURL = "https://virtserver.swaggerhub.com/";

export const baseApi = axios.create({
  baseURL
})
