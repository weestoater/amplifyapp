import React from 'react';
import AreaChart from '../components/Charts/AreaChart';
import PieChart from '../components/Charts/PieChart';

export function ChartsHomePage() {
	return (
		<div className="row">
			<AreaChart />
			<PieChart />
		</div>
	);
}
