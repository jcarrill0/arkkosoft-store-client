import axios from 'axios';
import { BASE_URL_DEV, BASE_URL_PROD } from '../utils/constants'

export const storeApi = axios.create({
  baseURL: BASE_URL_PROD,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const addProductApi = axios.create({
  baseURL: BASE_URL_PROD,
});