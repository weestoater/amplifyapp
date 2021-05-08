import React from 'react';

import { Welcome } from '../components/Home/WelcomePost';
import ChartsPost from '../components/Home/ChartsPost';

export function Home() {
	return (
		<div className="row">
			<Welcome />
			<ChartsPost />
		</div>
	);
}
