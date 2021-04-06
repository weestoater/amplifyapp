import React from 'react';
import { Welcome } from './WelcomeCard';
import Charts from '../Charts/Charts';

export function Home() {
	return (
		<div className="row">
			<Welcome />
			<Charts />
		</div>
	);
}
