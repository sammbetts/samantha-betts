import { apiUrl } from '../config';

export const useGetAllItems = async () => {
  try {
    const response = await fetch(`${apiUrl}/items`, {
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
