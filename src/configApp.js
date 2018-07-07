import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import reducers from './reducers';

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history), createLogger()];
const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(...middlewares)),
);

export { store, history };
