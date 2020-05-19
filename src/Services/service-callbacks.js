import axios from 'axios';

const apiCallbacks = axios.create({
  baseURL: 'http://localhost:3000/callbacks',
});

export default apiCallbacks;