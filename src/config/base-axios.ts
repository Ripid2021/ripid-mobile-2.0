import axios from 'axios';

const BaseAxios = axios.create({
  baseURL: 'https://staging.ripid.vn',
  headers: {
    version: 'v2',
  },
});

export default BaseAxios;
