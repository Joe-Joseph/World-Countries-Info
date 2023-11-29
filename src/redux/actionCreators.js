import { FETCH_ALL_COUNTRIES } from './actionTypes';

export const fetchAllCountries = (countries) => ({
  type: FETCH_ALL_COUNTRIES,
  payload: countries,
});

export const fetchCountry = (country) => ({
  type: FETCH_ALL_COUNTRIES,
  payload: country,
});
