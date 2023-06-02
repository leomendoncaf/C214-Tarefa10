import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3030',
  timeout: 9000,
});

export default client;