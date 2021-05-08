import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/global/Header';

import { Home } from './pages/Home';
import { About } from './pages/About';

import { Cards } from './pages/Cards';
import { ChartsHomePage } from './pages/Charts';

function App() {
	return (
		<Router>
			<>
				<Header site="burtware" />
				<main>
					<div className="container-fluid mt-4">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/cards" component={Cards} />
							<Route path="/charts" component={ChartsHomePage} />
						</Switch>
					</div>
				</main>
			</>
		</Router>
	);
}

export default App;
