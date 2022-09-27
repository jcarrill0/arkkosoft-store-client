import axios from 'axios';

const BASE_URL = 'http://localhost:9000/api/v1/'; 

export const storeApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});