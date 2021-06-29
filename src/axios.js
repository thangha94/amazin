import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://us-central1-amazin-b9e18.cloudfunctions.net/api',
});
export default instance;
