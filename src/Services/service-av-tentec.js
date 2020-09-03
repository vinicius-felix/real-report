import axios from 'axios';
const config = require('./api_link');

const apiAVTentec = axios.create({
  baseURL: config.API + '/av-tentec',
});

export default apiAVTentec;