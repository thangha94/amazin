import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:5001/amazin-b9e18/us-central1/api',
});
export default instance;
