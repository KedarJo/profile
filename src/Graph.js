import React, {Component} from 'react';
import * as d3 from "d3";
import graphData from './ethGraph.json'

class Graph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      canvas: null,
      context: null,
      canWidth: null,
      canHeight: null,
      simulation: null,
      toggle: true,
    }

    this.ticked = this.ticked.bind(this)
    this.drawLink = this.drawLink.bind(this)
    this.drawNode = this.drawNode.bind(this)
    this.reloadGraph = this.reloadGraph.bind(this)
  }

  drawLink(d) {
    this.context.moveTo(d.source.x, d.source.y)
    this.context.lineTo(d.target.x, d.target.y)
  }

  drawNode(d) {
    this.context.moveTo(d.x + 3, d.y);
    this.context.arc(d.x, d.y, 7, 0, 2 * Math.PI);
  }

  ticked() {
    this.context.clearRect(0, 0, this.canWidth, this.canHeight)

    this.context.beginPath()
    graphData.links.forEach(this.drawLink)
    this.context.strokeStyle = "#aaa";
    this.context.stroke();

    this.context.beginPath();
    graphData.nodes.forEach(this.drawNode)
    this.context.fill()
    this.context.strokeStyle = "#fff"
    this.context.stroke()

  }

  componentDidMount() {
    console.log('componentDidMount')
     this.canvas = document.querySelector('#GraphCanvas')
     this.context = this.canvas.getContext('2d')
     this.canWidth = this.canvas.width
     this.canHeight = this.canvas.height

     this.simulation = d3.forceSimulation()
         .force("link", d3.forceLink().id(function(d) { return d.id; }))
         .force("charge", d3.forceManyBody())
         .force("center", d3.forceCenter(this.canWidth / 2, this.canHeight / 2))

     this.simulation
         .nodes(graphData.nodes)
         .on('tick', this.ticked)

     this.simulation.force('link')
         .links(graphData.links)
  }



  reloadGraph() {
    this.canvas = document.querySelector('#GraphCanvas')
    this.context = this.canvas.getContext('2d')
    this.canWidth = this.canvas.width
    this.canHeight = this.canvas.height

    this.simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(this.canWidth / 2, this.canHeight / 2))


    this.simulation
        .nodes(graphData.nodes)
        .on('tick', this.ticked)
        /*
    this.simulation.force('link')
        .links(graphData.links)
        */
  }

  render() {
    console.log('render')
    return (
      <div>
        <button type="button" className="btn btn-outline-dark" onClick={this.reloadGraph}>
          <i className="fas fa-play"></i> Push
        </button>
        <canvas id='GraphCanvas' width={window.innerWidth * 0.65} height={window.innerHeight * 0.9}>Return</canvas>
      </div>
    )
  }
}

export default Graph;
