// services/applyService.ts
import axios from 'axios';
import { getUserToken } from './authService';

export const applyForVacancy = async (vacancyId: number): Promise<any> => {
  const token = getUserToken();

  if (!token) {
    throw new Error('User not logged in');
  }

  try {
    const response = await axios.post(
      'https://bf0a-213-230-125-170.ngrok-free.app/api/Apply/apply',
      { vacancy_id: vacancyId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw error;
  }
};
