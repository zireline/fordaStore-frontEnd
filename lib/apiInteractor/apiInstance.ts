import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://34.143.216.186:28762/api',
});

// export const axiosInstance = axios.create({
//   baseURL: 'http://api:28762/api',
// });