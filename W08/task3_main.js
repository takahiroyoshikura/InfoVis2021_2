d3.csv("https://takahiroyoshikura.github.io/InfoVis2021_2/W08/task1_data.csv")
	.then( data => {
		data.forEach( d => { d.label = d.label; d.value = +d.value; d.color = d.color;});

		var config = {
			parent: '#drawing_region',
			width: 256,
			height: 256,
			radius: 128
		};

		const pie_chart = new PieChart( config, data );
		pie_chart.update();
	})
	.catch( error => {
		console.log( error );
	});
