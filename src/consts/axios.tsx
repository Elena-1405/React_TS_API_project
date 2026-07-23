import { AxiosRequestConfig } from 'axios';
import { BASE_URL, MOVIE_URL, apiHost, keyAxiosHeader } from '../consts/consts';

export const movieApiOptions: AxiosRequestConfig = {
  method: 'GET',
  url: MOVIE_URL,
  headers: {
    'X-RapidAPI-Key': keyAxiosHeader,
    'X-RapidAPI-Host': apiHost,
  },
};
export const moviesListParams = {
  method: 'GET',
  url: BASE_URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': apiHost,
  },
};
