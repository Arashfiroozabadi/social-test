import React from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import NavbarLink from './components/navbar';
import Routes from './components/routes';
import UserDataBar from './components/userDataBar';

import './../styles/style.scss';

const App = () => (
  <Router>
    <div className="continer">
      <Helmet
        defaultTitle="Social Test"
        titleTemplate="Social Test %s"
      >
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />
        <link rel="apple-touch-icon" sizes="72x72" href="http://mysite.com/img/apple-touch-icon-72x72.png" />
      </Helmet>
      <NavbarLink />
      <UserDataBar />
      <Routes />
    </div>
  </Router>
);
export default App;
