import reducer from './fetching';
import { LOAD_TICKERS } from '../constants/ActionTypes';
import initialState from '../constants/Config';
import mockTickers from '../mocks/fetching/tickers';

describe('post reducer', () => {
  it('should return the initial state', () => {
    const { fetching } = initialState;
    expect(reducer(undefined, {})).toEqual(fetching);
  });

  it('should handle LOAD_TICKERS with values', () => {
    const mockAction = {
      type: LOAD_TICKERS,
      tickers: mockTickers,
    };
    expect(reducer({}, mockAction)).toEqual({ tickers: mockTickers });
  });
});
