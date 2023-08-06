import axios, { AxiosInstance } from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from '../const';

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: { 'X-Token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=' },
  });

  return api;
};

export { createApi };
