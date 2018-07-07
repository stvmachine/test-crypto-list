import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

export default function configureStore() {
  const middlewares = [thunk, createLogger()];
  return createStore(reducers, applyMiddleware(...middlewares));
}
