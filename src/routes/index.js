import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Todo from '../components/Todo'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Todo} />
      {/* <Route path="/register" component={SignUp} /> */}
    </Switch>
  );
}
