import { combineReducers } from 'redux';
import fetching from './fetching';
import config from './config';

const reducers = {
  fetching,
  config,
};

export default combineReducers(reducers);
