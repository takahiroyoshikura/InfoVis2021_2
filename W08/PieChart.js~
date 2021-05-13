class PieChart{

	constructor( config, data ) {
		this.config = {
			parent: config.parent,
			width: config.width || 256,
			height: config.height || 256,
			radius: config.radius || 128
		}
		this.data = data;
		this.init();
	}

	init() {
		let self = this;

		self.radius = Math.min( self.config.width, self.config.height ) / 2;

		self.svg = d3.select( self.config.parent )
			.attr('width', self.config.width)
			.attr('height', self.config.height)
			.append('g')
			.attr('transform', `translate(${self.config.width/2}, ${self.config.height/2})`);
	}

	update() {
		let self = this;

		self.pie = d3.pie()
			.value( d => d.value );

		self.arc = d3.arc()
			.innerRadius(0)
			.outerRadius(self.radius);

		self.label_arc = d3.arc()
			.innerRadius(self.radius - 30)
			.outerRadius(self.radius - 30)

		self.render();
	}

	render() {
		let self = this;

		self.svg.selectAll('pie')
			.data( self.pie(self.data) )
			.enter()
			.append('path')
			.attr('d', self.arc)
			.style('fill', 'brack')
			.attr('stroke', 'white')
			.style('stroke-width', '2px');

		self.svg.append('text')
			.attr('transform', function(self.data){return 'translate(' + self.label_arc.centroid(d) + ')'})
			.text(function(self.data){return d.label});
	}
}
