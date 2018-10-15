import React, {Component} from 'react';
import Web3 from 'web3';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { CSSTransitionGroup } from 'react-transition-group'
import { XYPlot, XAxis, YAxis, VerticalBarSeries, AreaSeries, LineSeries, LineSeriesCanvas } from 'react-vis';


class Infura extends Component {
  constructor(props) {
    super(props)
    this.state = {
        web3Provider: null,
        web3: null,
        blockLatest: null,
        cryptos: [],
        BTCTrend: null,
    }
    this.loadCrypto = this.loadCrypto.bind(this)
  }

  loadCrypto() {
    let getCryptoPrice = new Promise((resolve, reject) => {
      const result = axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD')
      resolve(result)
    });

    let getBTCTrendHour = new Promise((resolve, reject) => {
      const result = axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=20')
      resolve(result)
    });

    let getETHTrendHour = new Promise((resolve, reject) => {
      const result = axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=ETH&tsym=USD&limit=20')
      resolve(result)
    });

    let getXRPTrendHour = new Promise((resolve, reject) => {
      const result = axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=XRP&tsym=USD&limit=20')
      resolve(result)
    });

    Promise.all([getCryptoPrice, getBTCTrendHour, getETHTrendHour, getXRPTrendHour])
      .then((result) => {
          const cryptos = result[0].data;
          const BTCTrend = result[1].data;
          const ETHTrend = result[2].data;
          const XRPTrend = result[3].data;

          const BTCPriceHigh = []
          BTCTrend.Data.forEach((d) => {
            BTCPriceHigh.push(d.high)
          })
          const BTCPriceHighAdj =[]
          const minHighBTC = Math.min(...BTCPriceHigh) * 0.50
          BTCPriceHigh.forEach((d) => {
            BTCPriceHighAdj.push(Math.round(d - minHighBTC))
          })
          cryptos.BTC.Trend = BTCPriceHighAdj

          const ETHPriceHigh = []
          ETHTrend.Data.forEach((d) => {
            ETHPriceHigh.push(d.high)
          })
          const ETHPriceHighAdj =[]
          const minHighETH = Math.min(...ETHPriceHigh) * 0.50
          ETHPriceHigh.forEach((d) => {
            ETHPriceHighAdj.push(Math.round(d - minHighETH))
          })
          cryptos.ETH.Trend = ETHPriceHighAdj

          const XRPPriceHigh = []
          XRPTrend.Data.forEach((d) => {
            XRPPriceHigh.push(d.high)
          })
          const XRPPriceHighAdj =[]
          const minHighXRP = Math.min(...XRPPriceHigh) * 0.50
          XRPPriceHigh.forEach((d) => {
            XRPPriceHighAdj.push((d - minHighXRP))
          })
          cryptos.XRP.Trend = XRPPriceHighAdj

          //console.log(cryptos);
          this.setState({cryptos: cryptos})
      })
      .catch((err) => {
        console.log('Error Loading Crypto ', err )
      })
  }

  componentDidMount() {
    /*console.log(this.state.web3)
    if (this.state.web3 == null) {
      this.state.web3Provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/dPotOByPqLlLN3nx14Pq')
      this.state.web3 = new Web3(this.state.web3Provider)
    }
    //console.log(this.state.web3)
    //console.log(this.state.web3Provider)
    //this.state.web3.eth.getHashrate().then(console.log);
    */
    this.loadCrypto()
  }

  render() {
    
    return(
      <div>

        <button type="button" className="btn btn-outline-dark" onClick={this.loadCrypto}>
          <i className="fas fa-redo"></i> Refresh
        </button>
        <br />
        <br />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {Object.keys(this.state.cryptos).map((key) => (

          <div className="card rounded-top col-sm-3">
            <div className="card-body">
              <h3 className="card-title">{key}</h3>
              <p className="card-text">
                <h5>
                <NumberFormat value={this.state.cryptos[key].USD} fractionSize={2} prefix={'$'} displayType={'text'} thousandSeparator={true} decimalScale={2}/>
                </h5>
              </p>
              <XYPlot
                width={170}
                height={100}>

                <AreaSeries
                  color='blue'
                  curve={'curveMonotoneX'}
                  data={[
                    {x: 0, y: this.state.cryptos[key].Trend[0]},
                    {x: 1, y: this.state.cryptos[key].Trend[1]},
                    {x: 2, y: this.state.cryptos[key].Trend[2]},
                    {x: 3, y: this.state.cryptos[key].Trend[3]},
                    {x: 4, y: this.state.cryptos[key].Trend[4]},
                    {x: 5, y: this.state.cryptos[key].Trend[5]},
                    {x: 6, y: this.state.cryptos[key].Trend[6]},
                    {x: 7, y: this.state.cryptos[key].Trend[7]},
                    {x: 8, y: this.state.cryptos[key].Trend[8]},
                    {x: 9, y: this.state.cryptos[key].Trend[9]},
                    {x: 10, y: this.state.cryptos[key].Trend[10]},
                    {x: 11, y: this.state.cryptos[key].Trend[11]},
                    {x: 12, y: this.state.cryptos[key].Trend[12]},
                    {x: 13, y: this.state.cryptos[key].Trend[13]},
                    {x: 14, y: this.state.cryptos[key].Trend[14]},
                    {x: 15, y: this.state.cryptos[key].Trend[15]},
                    {x: 16, y: this.state.cryptos[key].Trend[16]},
                    {x: 17, y: this.state.cryptos[key].Trend[17]},
                    {x: 18, y: this.state.cryptos[key].Trend[18]},
                    {x: 19, y: this.state.cryptos[key].Trend[19]},
                  ]}/>
              </XYPlot>
            </div>
          </div>

        ))}
        </CSSTransitionGroup>

      </div>
    )
  }
}
// this.state.BTCTrend.Data[0].high
/*
{x: 0, y: this.state.BTCTrend.Data[0].high},
{x: 1, y: this.state.BTCTrend.Data[1].high},
{x: 2, y: this.state.BTCTrend.Data[2].high},
{x: 3, y: this.state.BTCTrend.Data[3].high},
{x: 4, y: this.state.BTCTrend.Data[4].high},
{x: 5, y: this.state.BTCTrend.Data[5].high},
{x: 6, y: this.state.BTCTrend.Data[6].high},
{x: 7, y: this.state.BTCTrend.Data[7].high},
{x: 8, y: this.state.BTCTrend.Data[8].high},
{x: 9, y: this.state.BTCTrend.Data[9].high},
  xType="ordinal"
*/
export default Infura;
