import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './containers/index'

ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/index', () => {
      const NextApp = require('./containers/index').default;
      ReactDOM.render(
        <AppContainer>
          <NextApp/>
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }