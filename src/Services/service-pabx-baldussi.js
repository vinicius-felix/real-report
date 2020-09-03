import axios from 'axios';
const config = require('./api_link');

const apiPABXBaldussi = axios.create({
  baseURL: config.API + '/pabx-baldussi',
});

export default apiPABXBaldussi;