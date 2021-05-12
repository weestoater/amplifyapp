import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/global/Header';

import Home from './pages/Home';

const App: FC = () => {
	return (
		<Router>
			<>
				<Header site="burtware" />
				<main>
					<div className="container-fluid mt-4">
						<Switch>
							<Route exact path="/" component={Home} />
						</Switch>
					</div>
				</main>
			</>
		</Router>
	);
};

export default App;
