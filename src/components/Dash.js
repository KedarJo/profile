import React, {Component} from 'react';
import * as d3 from "d3";

class Dash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pieDataset: null,
      pieTitle: null,
      pieDiv: null,
    }

    this.startRenderD3 = this.startRenderD3.bind(this)
    this.dsPieChart = this.dsPieChart.bind(this)

  }

  dsPieChart() {

    const formatAsPercentage = d3.format("%"),
        formatAsPercentage1Dec = d3.format(".1%"),
        formatAsInteger = d3.format(","),
        fsec = d3.timeFormat("%S s"),
        fmin = d3.timeFormat("%M m"),
        fhou = d3.timeFormat("%H h"),
        fwee = d3.timeFormat("%a"),
        fdat = d3.timeFormat("%d d"),
        fmon = d3.timeFormat("%b");

     const pieDataset = this.pieDataset
     const titleText = this.pieTitle
     const pieDiv = this.pieDiv
     //console.log(window.innerWidth, window.innerHeight)
     const width = 200,
		   height = 200,
		   outerRadius = Math.min(width, height) / 2,
		   innerRadius = outerRadius * .999,
		   // for animation
		   innerRadiusFinal = outerRadius * .5,
		   innerRadiusFinal3 = outerRadius* .4,
		   color = d3.scaleOrdinal(d3.schemeCategory10);   //builtin range of colors

     const vis = d3.select(pieDiv)
     	     .append("svg:svg")              //create the SVG element inside the <body>
     	     .data([pieDataset])                //associate our data with the document
   	       .attr("width", width)           //set the width and height of our visualization (these will be attributes of the <svg> tag
 	         .attr("height", height)
 	     		 .append("svg:g")                //make a group to hold our pie chart
 	         .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")")    //move the center of the pie chart from 0, 0 to radius, radius
 				;

     const arc = d3.arc()                  //this will create <path> elements for us using arc data
       	.outerRadius(outerRadius).innerRadius(innerRadius);

     // for animation
     const arcFinal = d3.arc().innerRadius(innerRadiusFinal).outerRadius(outerRadius);
  	 const arcFinal3 = d3.arc().innerRadius(innerRadiusFinal3).outerRadius(outerRadius);

     const pie = d3.pie()                  //this will create arc data for us given a list of values
        .value(function(d) { return d.measure; });    //we must tell it out to access the value of each element in our data array

     const arcs = vis.selectAll("g.slice") //this selects all <g> elements with class slice (there aren't any yet)
       .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
       .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
          .append("svg:g")                 //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
          .attr("class", "slice")          //allow us to style things in the slices (like text)
          .on("mouseover", mouseover)
   				.on("mouseout", mouseout)
   				.on("click", up);


     arcs.append("svg:path")
          .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
          .attr("d", arc)                 //this creates the actual SVG path using the associated data (pie) with the arc drawing function
          .append("svg:title")            //mouseover title showing the figures
          .text(function(d) { return d.data.category + ": " + formatAsPercentage(d.data.measure); });

     d3.selectAll("g.slice").selectAll("path").transition()
			    .duration(750)
			    .delay(10)
			    .attr("d", arcFinal )
			    ;

      // Add a label to the larger arcs, translated to the arc centroid and rotated.
  	  // source: http://bl.ocks.org/1305337#index.html
  	  arcs.filter(function(d) { return d.endAngle - d.startAngle > .2; })
  	  		.append("svg:text")
  	      .attr("dy", ".35em")
  	      .attr("text-anchor", "middle")
  	      .attr("transform", function(d) { return "translate(" + arcFinal.centroid(d) + ")rotate(" + angle(d) + ")"; })
  	      //.text(function(d) { return formatAsPercentage(d.value); })
  	      .text(function(d) { return d.data.category; })
  	      ;

  	   // Computes the label angle of an arc, converting from radians to degrees.
  		function angle(d) {
  		    var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
  		    return a > 90 ? a - 180 : a;
  		}

            // Pie chart title
      vis.append("svg:text")
          .attr("dy", ".35em")
          .attr("text-anchor", "middle")
          .text(titleText)
          .attr("class","title")
          ;

      function mouseover() {
    	  d3.select(this).select("path").transition()
    	      .duration(750)
    	        		//.attr("stroke","red")
    	        		//.attr("stroke-width", 1.5)
    	        		.attr("d", arcFinal3)
    	        		;
    	}

    	function mouseout() {
    	  d3.select(this).select("path").transition()
    	      .duration(750)
    	        		//.attr("stroke","blue")
    	        		//.attr("stroke-width", 1.5)
    	        		.attr("d", arcFinal)
    	        		;
    	}

    	function up(d, i) {

    				/* update bar chart when user selects piece of the pie chart */
    				//updateBarChart(dataset[i].category);
    				//updateBarChart(d.data.category, color(i));
    				//updateLineChart(d.data.category, color(i));

    	}



  }

  startRenderD3() {
    const depDataset = [
			  {category: "Noninterest", measure: 0.29},
	      {category: "Int checking", measure: 0.04},
	      {category: "Savings", measure: 0.54},
	      {category: "Svg cert", measure: 0.02},
	      {category: "Other TD", measure: 0.07},
	      {category: "Foreign Dep", measure:0.04}
      ];


    const loanCommercial = [
        {category: "Industrial", measure: 0.67},
        {category: "Rlt mortgage", measure: 0.24},
        {category: "Rlt cnstr", measure: 0.05},
        {category: "Lease", measure: 0.04},
      ];

    const advAssets = [
        {category: "Client", measure: 0.31},
        {category: "Fin Advisor", measure: 0.27},
        {category: "Separate", measure: 0.27},
        {category: "MF Advisory", measure: 0.15},
      ];

   /*
    this.pieDataset = depDataset;
    this.pieTitle = "Deposits $1.3T"
    this.pieDiv = "#pieChart1"
    this.dsPieChart()

    this.pieDataset = loanCommercial;
    this.pieTitle = "Comm Loans $503B"
    this.pieDiv = "#pieChart2"
    this.dsPieChart()
   */
    this.pieDataset = advAssets;
    this.pieTitle = "Adv Accts $542B"
    this.pieDiv = "#pieChart3"
    this.dsPieChart()



  }

  componentDidMount() {
    this.startRenderD3()
  }

  render() {
    console.log('render')
    return (
      <div>
        <div className="card rounded-top col-sm-4">
          <div className="card-body">
            <h4 className="card-title">Balance Sheet Analysis: Deposits</h4>
            <div id="pieChart1"></div>
          </div>
        </div>
        <div className="card rounded-top col-sm-4">
          <div className="card-body">
            <h4 className="card-title">Credit Risk Management: Loans</h4>
            <div id="pieChart2" className="col-sm-4"></div>
          </div>
        </div>
        <div className="card rounded-top col-sm-4">
          <div className="card-body">
            <h4 className="card-title">Earnings Performance: Brokerage</h4>
            <div id="pieChart3" className="col-sm-4"></div>
          </div>
        </div>

        <div id="barChart"></div>
        <div id="lineChart"></div>
      </div>
    )
  }
}
/*
<svg id='GraphSVG' width={window.innerWidth * 0.65} height={window.innerHeight * 0.9}>Return</svg>

*/

export default Dash;
