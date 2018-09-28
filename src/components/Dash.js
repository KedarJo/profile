import React, {Component} from 'react';
import {XYPlot,
        XAxis,
        YAxis,
        VerticalBarSeries,
        VerticalGridLines,
        HorizontalGridLines,
        DiscreteColorLegend,
        LineSeries,
        RadialChart, Hint} from 'react-vis';


class Dash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: false,
    }

  }

  render() {
    const {value} = this.state;

    return (
      <div>

        <div className="card rounded-top col-sm-5">
          <div className="card-body">
          <h4 className="card-title">Segment Sales, Operating Income (000 M)</h4>
            <XYPlot height={300} width={300} xType="ordinal" >
              <VerticalBarSeries data={[
                {x: 'Americas', y: 24.542, label: 'Americas'},
                {x: 'Europe', y: 12.138, label: 'Europe'},
                {x: 'China', y: 9.551, label: 'China'},
                {x: 'Japan', y: 3.867, label: 'Japan'},
                {x: 'APAC', y: 3.167, label: 'APAC'},
              ]} />
              <VerticalBarSeries data={[
                {x: 'Americas', y: 7.496},
                {x: 'Europe', y: 3.892},
                {x: 'China', y: 3.414},
                {x: 'Japan', y: 1.765},
                {x: 'APAC', y: 1.127},
              ]} />
              <XAxis />
              <YAxis />
            </XYPlot>
          </div>
        </div>

        <div className="card rounded-top col-sm-5">
          <div className="card-body">
            <h4 className="card-title">Sales by Product (000 M)</h4>
            <RadialChart
              className={'donut-chart-example'}
              data={[
                {angle: 29.9, label: 'iPhone'},
                {angle: 4.7, label: 'iPad'},
                {angle: 5.3, label: 'Mac'},
                {angle: 9.5, label: 'Services'},
                {angle: 3.7, label: 'Others'}
              ]}
              onValueMouseOver={v => this.setState({value: v})}
              onSeriesMouseOut={v => this.setState({value: false})}

              innerRadius={100}
              radius={140}
              width={300}
              height={300}
              padAngle={0.04}

            >
            {value && <Hint value={value} />}
            </RadialChart>
          </div>
        </div>

        <div className="card rounded-top col-sm-5">
          <div className="card-body">
          <h4 className="card-title">Consolidated Income (000 M)</h4>
            <XYPlot height={300} width={300} xType="ordinal" stackBy="y" >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <VerticalBarSeries data={[{x: 'Gross', y: 53.265}, {x: 'COS', y: 20.421}, {x: 'OpEx', y: 12.612}, {x: 'Tax', y: 11}, {x: 'Net', y: 11}]} />
              <VerticalBarSeries data={[{x: 'Gross', y: 0}, {x: 'COS', y: 32.844}, {x: 'OpEx', y: 7.809}, {x: 'Tax', y: 1.765}, {x: 'Net', y: 0}]} />
            </XYPlot>
          </div>
        </div>

        <div className="card rounded-top col-sm-5">
          <div className="card-body">
          <h4 className="card-title">EPS ($)</h4>
            <XYPlot height={300} width={300} xType="ordinal" stackBy="y" >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <VerticalBarSeries data={[{x: 'Basic', y: 2.36, label:'2.36', color:0}, {x: 'Diluted', y: 2.34, label:'2.34'}]} />
            </XYPlot>
          </div>
        </div>


      </div>
    )
  }
}
/*
<svg id='GraphSVG' width={window.innerWidth * 0.65} height={window.innerHeight * 0.9}>Return</svg>
<div className="card rounded-top col-sm-4">
  <div className="card-body">
    <h4 className="card-title">Balance Sheet Analysis: Deposits</h4>
  </div>
</div>


getAngle={d => d.theta}
*/

export default Dash;
