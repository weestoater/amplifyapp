import React from 'react';

function ChartsPost() {
	return (
		<div className="col-lg-3 col-md-6 col-sm-12">
			<div className="card mb-3">
				<div className="card-header bg-info text-white">
					<i className="fa fa-line-chart text-white mr-2" /> amCharts 4.0
				</div>
				<div className="card-body">
					<p>
						In my latest project at work I've been using the{' '}
						<a href="http://www.amcharts.com">amCharts 4.0</a> library and I must say I've really impressed
						with it's responsiveness.
					</p>
					<p>
						I'm going to try and do some experiments here with amCharts and ag-grid, though I may be limited
						by licensing constraints on this site, as I will be using thefree functionality, without any
						licensing.
					</p>
				</div>
			</div>
		</div>
	);
}

export default ChartsPost;
