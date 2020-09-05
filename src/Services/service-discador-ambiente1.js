import axios from 'axios';
const config = require('./api_link');

const apiDiscadorAmbiente1 = axios.create({
  baseURL: config.API + '/discador-ambiente1',
});

export default apiDiscadorAmbiente1;