import axios from 'axios';
const config = require('./api_link');

const apiURAs = axios.create({
  baseURL: config.API + '/tickets',
});

export default apiURAs;