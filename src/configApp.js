import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import throttle from 'lodash/throttle';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history), createLogger()];
const store = createStore(
  connectRouter(history)(reducers),
  persistedState,
  compose(applyMiddleware(...middlewares)),
);

/* Save state changes in localStorage */
store.subscribe(
  throttle(() => {
    saveState({
      fetching: store.getState().fetching,
    });
  }, 1000),
);

export { store, history };
