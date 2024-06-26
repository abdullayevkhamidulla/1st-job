import axios from 'axios';

const api = axios.create({
  baseURL: 'https://db73-213-230-125-170.ngrok-free.app/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const post = async (url: string, data: any) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Request failed';
  }
};

export default api;
