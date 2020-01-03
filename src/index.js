import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store';
import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as ar from 'react-intl/locale-data/ar';

addLocaleData(en);
addLocaleData(ar);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);