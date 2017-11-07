import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {IntlProvider} from 'react-intl';

import { Provider } from 'react-redux';

import App from './containers/index';
import { store } from './store/store';

ReactDOM.render(
  <AppContainer>
    <IntlProvider locale="en">
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/index', () => {
      const NextApp = require('./containers/index').default;
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <NextApp />
          </Provider>          
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }