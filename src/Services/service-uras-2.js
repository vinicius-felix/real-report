import axios from 'axios';
const config = require('./api_link');

const apiURAs = axios.create({
  baseURL: config.API + '/uras-2',
});

export default apiURAs;