import * as types from '../constants/ActionTypes';

/* Fecthing actions */
export function loadSymbols(symbols) {
  return { type: types.LOAD_SYMBOLS, symbols };
}

export function loadTickers(tickers) {
  return { type: types.LOAD_TICKERS, tickers };
}
