import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

import './assets/styles/base.css';

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <Layout />
    </Provider>
  </BrowserRouter>), 
                document.getElementById('root') as HTMLElement
);
registerServiceWorker();
