import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5279/api', // Backend URL
});

export default api;
