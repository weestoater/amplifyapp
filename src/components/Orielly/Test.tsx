import React, { FC } from 'react';
import Greeting from './GreetingFunctional';

const OTest: FC = () => {
	return (
		<div className="card">
			<div className="card-header bg-info text-white">
				<i className="fa fa-check-square-o mr-2" /> O'Reilly .tsx
			</div>
			<div className="card-body">
				<p>testing 1 2 3</p>

				<Greeting />
			</div>
		</div>
	);
};

export default OTest;
