import axios from 'axios';
const config = require('./api_link');

const apiDiscadorBaldussi = axios.create({
  baseURL: config.API + '/discador-baldussi-2',
});

export default apiDiscadorBaldussi;