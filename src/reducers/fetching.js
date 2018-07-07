import APPCONFIG from '../constants/Config';
import { LOAD_SYMBOLS, LOAD_TICKERS } from '../constants/ActionTypes';

const initialSettings = APPCONFIG.fetching;
const fetching = (state = initialSettings, action) => {
  switch (action.type) {
    case LOAD_TICKERS:
      return {
        ...state,
        tickers: action.tickers,
      };

    case LOAD_SYMBOLS:
      return {
        ...state,
        symbols: action.symbols,
      };

    default:
      return state;
  }
};

export default fetching;
