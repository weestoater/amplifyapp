import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/global/Header';

import { Home } from './components/Home/Home';
import { About } from './components/About/About';

import { ChartsHomePage } from './components/Charts/Index';

function App() {
	return (
		<Router>
			<>
				<Header site="burtware" />
				<main>
					<div className="container-fluid mt-4">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/charts">
								<ChartsHomePage />
							</Route>
						</Switch>
					</div>
				</main>
			</>
		</Router>
	);
}

export default App;
