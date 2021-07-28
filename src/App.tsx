import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './containers/home/home.container';

const App: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/home' component={Home} />
			<Route>
				<Redirect to='/home' />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default App;
