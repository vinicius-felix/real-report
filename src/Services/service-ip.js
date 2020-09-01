import axios from 'axios';
const config = require('./api_link');

const apiCallbacks = axios.create({
  baseURL: config.API + '/ip',
});

export default apiCallbacks;