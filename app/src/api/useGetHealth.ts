import { apiUrl } from '../config';

export const useGetHealth = async () => {
  try {
    const response = await fetch(`${apiUrl}/health`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    return [];
  }
};
