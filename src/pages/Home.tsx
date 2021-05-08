import React, { FC } from 'react';

import Welcome from '../components/home/WelcomePost';
import ChartsPost from '../components/home/ChartsPost';

const Home: FC = () => {
	return (
		<div className="row">
			<Welcome />
			<ChartsPost />
		</div>
	);
};

export default Home;
