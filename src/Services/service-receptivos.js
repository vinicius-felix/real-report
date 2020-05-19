import axios from 'axios';

const apiReceptivos = axios.create({
  baseURL: 'http://localhost:3000/receptivos',
});

export default apiReceptivos;