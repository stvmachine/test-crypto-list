import reducer from './fetching';
import { LOAD_TICKERS } from '../constants/ActionTypes';
import initialState from '../constants/Config';
import mockSymbols from '../mocks/fetching/symbols';

describe('post reducer', () => {
  it('should return the initial state', () => {
    const { fetching } = initialState;
    expect(reducer(undefined, {})).toEqual(fetching);
  });

  it('should handle LOAD_TICKERS with empty array', () => {
    const mockAction = {
      type: LOAD_TICKERS,
      tickers: [],
    };
    expect(reducer({}, mockAction)).toEqual({ tickers: [] });
  });

  it('should handle LOAD_TICKERS with values', () => {
    const mockAction = {
      type: LOAD_TICKERS,
      tickers: mockSymbols,
    };
    expect(reducer({}, mockAction)).toEqual({ tickers: mockSymbols });
  });
});
