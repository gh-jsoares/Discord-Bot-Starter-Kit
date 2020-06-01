import { API_BASE_URL, API_AUTH_TOKEN } from '../../config/config.js';
import _axios from 'axios';

export const axios = _axios.create({ baseURL: API_BASE_URL });
axios.defaults.headers.common['Authorization'] = API_AUTH_TOKEN;