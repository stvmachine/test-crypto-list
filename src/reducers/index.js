import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import fetching from './fetching';

const reducers = {
  // routing: routerReducer,
  fetching,
};

export default combineReducers(reducers);
