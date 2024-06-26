// auth.ts
import { post } from './api';

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
    const response = await post('/Auth/register', formData);
    return response;
  } catch (error: any) {
    throw error;
  }
};

export const loginUser = async (userData: { username: string; password: string }): Promise<any> => {
  try {
    const response = await post('/Auth/login', userData);
    return response;
  } catch (error: any) {
    // console.log('error', error);
    throw error;
  }
};
const saveUserData = (token: string) => {
  localStorage.setItem('token', token);
};

export const getUserToken = () => {
  return localStorage.getItem('token');
};

export const clearUserData = () => {
  localStorage.removeItem('token');
};