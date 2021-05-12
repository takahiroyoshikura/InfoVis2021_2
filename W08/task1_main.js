d3.csv("https://takahiroyoshikura.github.io/InfoVis2021_2/W08/task1_data.csv")
	.then( data => {
		data.forEach( d => { d.label = d.label; d.value = +d.value; });

		var config = {
			parent: '#drawing_region',
			width: 256,
			height: 128,
			margin: {top:10, right:10, bottom:20. left:60},
		};

		const bar_chart = new BarChart( config, data );
		bar_chart.update();
	})
	.catch( error => {
		console.log( error );
	});
