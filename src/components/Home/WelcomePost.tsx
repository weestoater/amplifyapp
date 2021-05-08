import React, { FC } from 'react';

const Welcome: FC = () => {
	return (
		<div className="col-lg-3 col-md-6 col-sm-12">
			<div className="card mb-3">
				<div className="card-header">
					<i className="bi bi-house" /> Welcome
				</div>
				<div className="card-body">
					<p>This is my little play pen for ReactJs and AWS hobby projects.</p>
					<p>I'm hoping to add some experiments with ReactJs and dynamic charting soon.</p>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
