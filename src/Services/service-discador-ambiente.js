import axios from 'axios';
const config = require('./api_link');

const apiDiscadorAmbiente = axios.create({
  baseURL: config.API + '/discador-ambiente',
});

export default apiDiscadorAmbiente;