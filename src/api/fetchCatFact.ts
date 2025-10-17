import axios, { AxiosError } from 'axios';

import { ICatFactData } from '../types';

const REQUEST_TIMEOUT = 5000;
const DEFAULT_FALLBACK_FACT = "A random cat fact could not be fetched. The Cat Fact API service is temporarily unavailable."

export const getCatFact = async (): Promise<string> => {
  try {
    const apiUrl: string = process.env.CAT_FACT_API_URL ?? '';
    const response = await axios.get<ICatFactData>(apiUrl, { timeout: REQUEST_TIMEOUT });

    if (response.status !== 200 || !response.data?.fact) {
      console.error('Error fetching cat fact: Unexpected status or missing data.', {
        status: response.status,
        data: response.data
      });
      return DEFAULT_FALLBACK_FACT;
    }

    return response.data.fact;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    
    if (axiosError.code === 'ECONNABORTED') {
      console.error(`Cat Fact API Timeout (${REQUEST_TIMEOUT}ms):`, axiosError.message);
    } else if (axiosError.response) {
      console.error(`Cat Fact API HTTP Error (Status ${axiosError.response.status}):`, axiosError.message);
    } else {
      console.error('Cat Fact API Network/Unknown Error:', axiosError.message);
    }

    return DEFAULT_FALLBACK_FACT;
  }
};