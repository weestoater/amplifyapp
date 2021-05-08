import React, { FC } from 'react';
import AreaChart from '../components/charts/AreaChart';
import PieChart from '../components/charts/PieChart';

const ChartsHomePage: FC = () => {
	return (
		<div className="row">
			<AreaChart />
			<PieChart />
		</div>
	);
};

export default ChartsHomePage;
