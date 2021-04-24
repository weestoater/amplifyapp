import React from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_material from '@amcharts/amcharts4/themes/material';

import matchesData from './matches-data.json';

export const AreaChart = () => {
	am4core.useTheme(am4themes_animated);
	am4core.useTheme(am4themes_material);

	const chart = am4core.create('areachart', am4charts.XYChart);
	chart.colors.step = 1;

	chart.data = matchesData;

	// Create axes
	const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
	categoryAxis.dataFields.category = 'date';
	categoryAxis.title.text = 'Date';

	const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	valueAxis.title.text = 'Goals scored';

	const series = chart.series.push(new am4charts.ColumnSeries());
	series.name = 'Scored';
	series.columns.template.tooltipText = '{name}: {valueY}\n {venue} to {opposition}';
	series.columns.template.fill = am4core.color('#090'); // fill
	series.columns.template.opacity = 0.7;
	series.dataFields.valueY = 'scored';
	series.dataFields.categoryX = 'date';

	const series2 = chart.series.push(new am4charts.ColumnSeries());
	series2.name = 'Conceded';
	series2.columns.template.tooltipText = '{name}: {valueY}\n {venue} to {opposition}';
	series2.columns.template.fill = am4core.color('#900'); // fill
	series2.columns.template.opacity = 0.7;
	series2.dataFields.valueY = 'conceded';
	series2.dataFields.categoryX = 'date';

	// Add cursor
	chart.cursor = new am4charts.XYCursor();

	// add legend
	chart.legend = new am4charts.Legend();

	return (
		<>
			<div className="col-lg-6 col-md-12 mb-4">
				<div className="card charts-card">
					<div className="card-header">Area Chart</div>
					<div className="card-body">
						<h2>Motherwell F.C. Match Scores</h2>
						{chart.data ? (
							<div id="areachart" />
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
};
