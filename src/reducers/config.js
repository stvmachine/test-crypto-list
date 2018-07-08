import APPCONFIG from '../constants/Config';
import { CHANGE_SAVE_TICKERS } from '../constants/ActionTypes';

const initialSettings = APPCONFIG.config;
const config = (state = initialSettings, action) => {
  switch (action.type) {
    case CHANGE_SAVE_TICKERS:
      return {
        ...state,
        saveTickersOnLocalStorage: action.saveTickersOnLocalStorage,
      };

    default:
      return state;
  }
};

export default config;
