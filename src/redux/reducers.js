import { FETCH_ALL_COUNTRIES, FETCH_COUNTRY } from './actionTypes';

const initialState = {
  countries: [],
  country: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case FETCH_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};
