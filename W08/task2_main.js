d3.csv("https://takahiroyoshikura.github.io/InfoVis2021_2/W08/task2_data.csv")
	.then( data => {
		data.forEach( d => { d.x = +d.x; d.y = +d.y; });

		var config = {
			parent: '#drawing_region',
			width: 256,
			height: 256,
			margin: {top:10, right:10, bottom:25, left:25}
		};

		const line_chart = new LineChart( config, data );
		line_chart.update();
	})
	.catch( error => {
		console.log( error );
	});
