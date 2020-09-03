import axios from 'axios';
const config = require('./api_link');

const apiAVYpy = axios.create({
  baseURL: config.API + '/av-ypy',
});

export default apiAVYpy;