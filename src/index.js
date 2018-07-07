import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Index from './pages/index';

ReactDOM.render(<Index />, document.querySelector('#root'));
registerServiceWorker();
