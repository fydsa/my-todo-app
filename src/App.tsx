import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/home/home.container'

function App() {
  return (
    <BrowserRouter>
      <Route path = '/home' component = {Home} />
    </BrowserRouter>
  );
}

export default App;
