import axios from 'axios';

const api = axios.create({
  baseURL: 'https://73a8-213-230-125-170.ngrok-free.app/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
