/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const apiRequest = async <T>(
  method: 'get' | 'post' | 'put' | 'delete',
  endpoint: string,
  data?: any,
): Promise<T> => {
  try {
    const response = await api.request<T>({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      'API error:',
      axiosError.response?.data || axiosError.message,
    );
    throw axiosError;
  }
};
