import axios from 'axios';

const api = axios.create({
  baseURL: "https://gleearapp-backend.herokuapp.com/",
});

export default api;
