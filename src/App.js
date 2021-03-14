import {Header} from './components/global/Header';
import {Footer} from './components/global/Footer';

function App() {
	return (
		<>
			<Header site="burtware" />
			<main>
				<div className="container-fluid">
					<div className="row mt-4">
						<div className="col-sm-3">
							<div className="card">
								<div className="card-header">Welcome</div>
								<div className="card-body">
									<p>
										This is my little play pen for ReactJs
										and AWS hobby projects.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
