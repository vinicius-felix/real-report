import axios from 'axios';
const config = require('./api_link');

const apiDiscadorAmbiente2 = axios.create({
  baseURL: config.API + '/discador-ambiente2',
});

export default apiDiscadorAmbiente2;