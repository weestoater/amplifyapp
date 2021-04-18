import React from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_material from '@amcharts/amcharts4/themes/material';

export function PieChart() {
	am4core.useTheme(am4themes_animated);
	am4core.useTheme(am4themes_material);

	const chart = am4core.create('piechart', am4charts.PieChart);
	chart.data = [
		{
			player: 'Devante Cole',
			goals: 10,
		},
		{
			player: 'Tony Watt',
			goals: 6,
		},
		{
			player: 'Christopher Long',
			goals: 5,
		},
		{
			player: 'Alan Campbell',
			goals: 5,
		},
		{
			player: 'Jordan Robers',
			goals: 3,
		},
		{
			player: "Mark O'Hara",
			goals: 3,
		},
		{
			player: 'Bevis Mugabi',
			goals: 2,
		},
		{
			player: "Stephen O'Donnell",
			goals: 2,
		},
		{
			player: 'Lim Polwarth',
			goals: 1,
		},
		{
			player: 'Barry Maguire',
			goals: 1,
		},

		{
			player: 'Declan Gallagher',
			goals: 1,
		},
	];
	chart.innerRadius = am4core.percent(40);

	const pieSeries = chart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = 'goals';
	pieSeries.dataFields.category = 'player';

	return (
		<>
			<div className="col-lg-6 col-md-12">
				<div className="card charts-card">
					<div className="card-header">Pie Chart</div>
					<div className="card-body">
						<h2>Motherwell F.C. Goal Scorers</h2>
						{chart.data ? (
							<div id="piechart" />
						) : (
							<p className="text-center text-info">
								<i className="fa fa-4x fa-spin fa-spinner m-4 " />
								<br />
								Loading data...
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
