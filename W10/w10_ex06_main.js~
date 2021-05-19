var svg = d3.select('#drawing_region');
update( data );

d3.csv("https://takahiroyoshikura.github.io/InfoVis2021_2/W10/w10_task1_data.csv", update );
function update(data) {
	    let padding = 10;
	    let height = 20;

	    svg.selectAll("rect")
	        .data(data)
	        .join("rect")
	        .transition().duration(1000)
	        .attr("x", padding)
	        .attr("y", (d,i) => padding + i * ( height + padding ))
	        .attr("width", d => d)
	        .attr("height", height);
}

d3.select('#reverse')
	.on('click', d => {
		data.reverse();
	        update(data);
	});
