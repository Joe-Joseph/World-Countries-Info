import { combineReducers } from 'redux';
import { countriesReducer } from './reducers';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export default rootReducer;
