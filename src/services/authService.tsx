import api from './api';

interface RegisterFormData {
  firstName: string;
  secondName: string;
  lastName: string;
  login: string;
  password: string;
  telNumber: string;
}

export const registerUser = async (formData: RegisterFormData): Promise<any> => {
  try {
    const response = await api.post('/Auth/register', formData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Registration failed';
  }
};

export const loginUser = async (userData: { username: string; password: string }): Promise<any> => {
  try {
    const response = await api.post('/Auth/login', userData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || 'Login failed';
  }
};
