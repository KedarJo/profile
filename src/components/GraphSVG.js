import React, {Component} from 'react';
import * as d3 from "d3";
import graphData from './ethGraph.json'

class Graph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      svg: null,
      context: null,
      svgWidth: null,
      svgHeight: null,
      simulation: null,
      color: null,
      link: null,
      node: null,
    }

    this.ticked = this.ticked.bind(this)
    this.dragstarted = this.dragstarted.bind(this)
    this.dragged = this.dragged.bind(this)
    this.dragended = this.dragended.bind(this)

  }

  ticked() {

    this.link
      .attr("x1", function(d) { return d.source.x })
      .attr("y1", function(d) { return d.source.y })
      .attr("x2", function(d) { return d.target.x })
      .attr("y2", function(d) { return d.target.y })

    this.node
      .attr("cx", function(d) { return d.x })
      .attr("cy", function(d) { return d.y })

  }

  componentDidMount() {
     this.svg = d3.select('#GraphSVG'),
        this.svgWidth = +this.svg.attr('width'),
        this.svgHeight = +this.svg.attr('height')

     this.color = d3.scaleOrdinal(d3.schemeCategory10)

     this.simulation = d3.forceSimulation()
         .force("link", d3.forceLink().id(function(d) { return d.id; }))
         .force("charge", d3.forceManyBody())
         .force("center", d3.forceCenter(this.canWidth / 2, this.canHeight / 2))

     this.link = this.svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graphData.links)
        .enter().append("line")
        .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

     this.node = this.svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graphData.nodes)
        .enter().append("circle")
        .attr("r", 7)
        .attr("fill", function(d) { return this.color; })
        .call(d3.drag()
          .on("start", this.dragstarted)
          .on("drag", this.dragged)
          .on("end", this.dragended));

     this.node.append("title")
         .text(function(d) { return d.id; });

     this.simulation
         .nodes(graphData.nodes)
         .on('tick', this.ticked)

     this.simulation.force('link')
         .links(graphData.links)
  }


  dragstarted(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    console.log(d)
    d.fx = d.x;
    d.fy = d.y;
  }

  dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  dragended(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }


  render() {
    console.log('render')
    return (
      <div>
        <svg id='GraphSVG' width={window.innerWidth * 0.65} height={window.innerHeight * 0.9}>Return</svg>
      </div>
    )
  }
}
/*
<canvas id='GraphCanvas' width={window.innerWidth * 0.65} height={window.innerHeight * 0.9}>Return</canvas>
<button type="button" className="btn btn-outline-dark" onClick={this.reloadGraph}>
  <i className="fas fa-play"></i>
</button>

*/

export default Graph;
