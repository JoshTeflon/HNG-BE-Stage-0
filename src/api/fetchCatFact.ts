import axios from 'axios';

export const getCatFact = async (): Promise<string> => {
  try {
    const apiUrl: string = process.env.CAT_FACT_API_URL ?? '';
    const response = await axios.get(apiUrl, { timeout: 5000 });

    console.log('cat-response', response)

    return response.data?.fact;
  } catch (error: unknown) {
    console.error('Error fetching cat fact:', error);
    return "cat fact API service is temporarily down.";
  }
};