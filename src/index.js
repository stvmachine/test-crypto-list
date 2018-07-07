import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configApp';

const App = () => (
  <Provider store={configureStore()}>
    <Router history={createBrowserHistory()}>
      <Routes />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
registerServiceWorker();
