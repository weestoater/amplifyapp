import {Header} from './components/global/Header';
import {Footer} from './components/global/Footer';

import {Welcome} from './components/Content/WelcomeCard';

function App() {
	return (
		<>
			<Header site="burtware" />
			<main>
				<div className="container-fluid">
					<div className="row mt-4">
						<div className="col-sm-3">
							<Welcome />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
