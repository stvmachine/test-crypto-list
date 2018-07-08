import APPCONFIG from '../constants/Config';
import { LOAD_TICKERS } from '../constants/ActionTypes';

const initialSettings = APPCONFIG.fetching;
const fetching = (state = initialSettings, action) => {
  switch (action.type) {
    case LOAD_TICKERS:
      return {
        ...state,
        tickers: action.tickers,
      };

    default:
      return state;
  }
};

export default fetching;
