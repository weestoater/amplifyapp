import React from 'react';
import AreaChart from '../components/charts/AreaChart';
import PieChart from '../components/charts/PieChart';

export function ChartsHomePage() {
	return (
		<div className="row">
			<AreaChart />
			<PieChart />
		</div>
	);
}
