import { combineReducers } from 'redux';
import fetching from './fetching';

const reducers = {
  fetching,
};

export default combineReducers(reducers);
