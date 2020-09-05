import axios from 'axios';
const config = require('./api_link');

const apiURAs = axios.create({
  baseURL: config.API + '/uras',
});

export default apiURAs;