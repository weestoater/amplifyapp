import React from 'react';

export function About() {
	return (
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-12">
				<div className="card mb-3">
					<div className="card-header">
						<h2>
							About <code>burtware</code>
						</h2>
					</div>
					<div className="card-body">
						<p>
							This is a site for me to play with and learn more about <code>ReactJS</code> and{' '}
							<code>AWS</code>. I use both technologies in my day job and am aiming to get certified as an AWS
							Developer this year.
						</p>

						<p>
							I also want to use it to trial different charting libraries and implement the fabulous React
							Testing Library based on{' '}
							<a href="http://www.testingjavascript.com" target="_blank">
								testing javascript
							</a>{' '}
							course from <b>Kent C. Dodds</b>.
						</p>
					</div>
				</div>
			</div>
			{/* <div className="col-sm-3">
				<div className="card mb-3">
					<div className="card-header">
						<h2 className="text-info">ReactJS</h2>
					</div>
					<div className="card-body">
						<p>asdasdasd</p>
					</div>
				</div>
			</div>
			<div className="col-sm-3">
				<div className="card mb-3">
					<div className="card-header">
						<h2 className="text-warning">AWS</h2>
					</div>
					<div className="card-body">
						<p>asdasdasd</p>
					</div>
				</div>
			</div> */}
		</div>
	);
}
