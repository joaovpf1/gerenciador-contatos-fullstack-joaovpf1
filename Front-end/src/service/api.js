import axios from 'axios';

export const hubApi = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 8 * 1000,
})