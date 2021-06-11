d3.csv("https://takahiroyoshikura.github.io/InfoVis2021_2/final_task/data2.csv")
	.then( data => {
		data.forEach( d => { d.value = +d.batting; });

		var config = {
			parent: '#drawing_region_piechart',
			width: 512,
			height: 512,
			margin: {top:35, right:10, bottom:15, left:10}
		};

		const pie_chart = new PieChart( config, data );
		pie_chart.update();
	})
	.catch( error => {
		console.log( error );
	});
