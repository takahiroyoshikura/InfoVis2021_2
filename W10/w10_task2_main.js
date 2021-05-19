d3.csv("https://vizlab-kobe-lecture.github.io/InfoVis2021/W04/data.csv")
	.then( data => {
		data.forEach(d => {d.x = +d.x; d.y = +d.y;});

		var config = {
			parent: '#drawing_region',
			width: 256,
			height: 256,
			margin: {top:25, right:10, bottom:50, left:50},
			title: 'W10 Task2',
			xlable: 'X label',
			ylabel: 'Y label'
		};

		const scatter_plot = new ScatterPlot( config, data );
		scatter_plot.update();
	})
	.catch( error => {
		console.log( error );
	});
