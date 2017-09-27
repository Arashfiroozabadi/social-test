import React from 'react';
import './../styles/style.scss';

import img from './../styles/img/react-logo.svg';

const App = () => (
  <div className="continer">
    <header>
      <img src={img} alt="" />
    </header>
    <h1>React starter-kit</h1>
    <h3>To get started, edit <br />
      <code>dist/containers/index.jsx</code>
      <br />& <br />
      <code>dist/styles/style.scss</code>
    </h3>
  </div>
);

export default App;