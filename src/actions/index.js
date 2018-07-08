import * as types from '../constants/ActionTypes';

export function changeSaveTickers(saveTickersOnLocalStorage) {
  return { type: types.CHANGE_SAVE_TICKERS, saveTickersOnLocalStorage };
}
/* Fecthing actions */
export function loadTickers(tickers) {
  return { type: types.LOAD_TICKERS, tickers };
}
