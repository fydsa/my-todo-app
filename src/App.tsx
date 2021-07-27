import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './containers/home/home.container'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route exact path="/">
          <Redirect to='/home' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
