d3.csv("https://takahiroyoshikura.github.io/InfoVis2021_2/final_task/data1.csv")
	.then( data => {
		data.forEach( d => { d.x = +d.month; d.y = +d.hit; });

		var config = {
			parent: '#drawing_region_linechart',
			width: 512,
			height: 512,
			margin: {top:25, right:10, bottom:50, left:50},
			xlabel: 'month',
			ylabel: 'hits',
		};

		const line_chart = new LineChart( config, data );
		line_chart.update();
	})
	.catch( error => {
		console.log( error );
	});
		
