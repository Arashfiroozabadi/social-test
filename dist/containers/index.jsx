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
      <br />
      <code>dist/styles/style.scss</code>
    </h3>
    <h4 className="note">
      بعد از build گرفتن لطفا به آدرس <code>build/styles/style.css</code> رفته و برای اعمال شدن فومت 
      کد
      <code>{'{font-family:iransans;src:url(../fonts/IS.ttf)}'}</code>
    </h4>
  </div>
);

export default App;