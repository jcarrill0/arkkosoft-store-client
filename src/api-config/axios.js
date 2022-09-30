import axios from 'axios';

const BASE_URL_PROD = 'http://54.164.24.197/api/v1/'; 
const BASE_URL_DEV = 'http://localhost:9000/api/v1/'; 

export const storeApi = axios.create({
  baseURL: BASE_URL_PROD,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const addProductApi = axios.create({
  baseURL: BASE_URL,
});