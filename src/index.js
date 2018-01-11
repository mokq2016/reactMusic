import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import routes from './router/router';
import configureStore from './store/configureStore'
const store = configureStore()

ReactDOM.render( <Provider store={store}>
                  <HashRouter url='123'>
                    { routes }
                  </HashRouter>
                  </Provider>
          , document.getElementById('root'));
registerServiceWorker();
