import React from 'react';

import { Welcome } from '../components/home/WelcomePost';
import ChartsPost from '../components/home/ChartsPost';

export function Home() {
	return (
		<div className="row">
			<Welcome />
			<ChartsPost />
		</div>
	);
}
