import React from 'react';
import { AreaChart } from './AreaChart';
import { PieChart } from './PieChart';

export function ChartsHomePage() {
	return (
		<div className="row">
			<AreaChart />
			<PieChart />
		</div>
	);
}
