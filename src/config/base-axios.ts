import axios from 'axios';

const BaseAxios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    version: 'v2',
  },
});

export default BaseAxios;
