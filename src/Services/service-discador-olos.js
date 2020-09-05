import axios from 'axios';
const config = require('./api_link');

const apiDiscadorOlos = axios.create({
  baseURL: config.API + '/discador-olos',
});

export default apiDiscadorOlos;