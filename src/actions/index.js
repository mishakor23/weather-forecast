import axios from 'axios';

const API_KEY = 'ea4f1dd2418525c15cc92052d4775c29';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ua`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
