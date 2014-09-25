var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var left = width/2-20;

d3.json('data/state-data_chart.json', function(data) {
  nv.addGraph(function() {
    var chart = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
		.margin({right: 20, left: 220})
		.forceY([-1,1])
		.showLegend(false)
        .showValues(false)           //Show bar value next to each bar.
        .tooltips(true)             //Show tooltips on hover.
        .transitionDuration(350)
        .showControls(false);        //Allow user to switch between "Grouped" and "Stacked" mode.

    chart.yAxis
        .tickFormat(d3.format(',f'))
		
		.tickValues([-1,0,1])
		.axisLabel('Stance')
		.axisLabelDistance(40);
	
	d3.select('#chart1 svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
});
