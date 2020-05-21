import axios from 'axios';
const config = require('./api_link');

const apiReceptivos = axios.create({
  baseURL: config.API + '/receptivos',
});

export default apiReceptivos;