import axios from 'axios';
const config = require('./api_link');

const apiDiscadorAmbiente3 = axios.create({
  baseURL: config.API + '/discador-ambiente3',
});

export default apiDiscadorAmbiente3;