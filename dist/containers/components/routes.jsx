import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import FormOne from './form1';
import List from './list';
import Home from './home';
import Users from './users'



const routeComp = [
  {path:'/', comp:Home},
  {path:'/form', comp:FormOne},
  {path:'/list', comp:List},
  {path:'/user', comp:Users}
];


function NotMatch() {
  return (
    <div>
      <h1>NotMatch</h1>
    </div>
  );
}


function Routes() {
  return (
    <Switch>
      {routeComp.map(d => (
        <Route
          exact
          key={d.path}
          path={d.path}
          component={d.comp}
        />
      ))}
      <Route component={NotMatch} />
    </Switch>
  );
}


export default Routes;
