import { apiUrl } from '../config';

export const useGetAllEntries = async () => {
  try {
    const response = await fetch(`${apiUrl}/entries`, {
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
