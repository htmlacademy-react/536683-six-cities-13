import axios from 'axios';
import { BASE_URL, TIMEOUT } from '../const';

export default axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: { 'X-Token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=' },
});
