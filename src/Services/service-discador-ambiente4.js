import axios from 'axios';
const config = require('./api_link');

const apiDiscadorAmbiente4 = axios.create({
  baseURL: config.API + '/discador-ambiente4',
});

export default apiDiscadorAmbiente4;