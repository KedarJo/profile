import React, {Component} from 'react';
import Web3 from 'web3';
import axios from 'axios';
import NumberFormat from 'react-number-format';

class Infura extends Component {
  constructor(props) {
    super(props)
    this.state = {
        web3Provider: null,
        web3: null,
        blockLatest: null,
        cryptos: []
    }
    this.loadCrypto = this.loadCrypto.bind(this)
  }

  loadCrypto() {
    let getCryptoPrice = new Promise((resolve, reject) => {
      const result = axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
      resolve(result)
    });

    getCryptoPrice
      .then((result) => {
          const cryptos = result.data;
          //console.log(cryptos);
          this.setState({cryptos: cryptos});
      })
      .catch((err) => {
        console.log('Error Loading Crypto')
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

        {Object.keys(this.state.cryptos).map((key) => (

          <div className="card col-sm-4">
            <div className="card-body">
              <h3 className="card-title">{key}</h3>
              <p className="card-text">
                <NumberFormat value={this.state.cryptos[key].USD} fractionSize={2} prefix={'$'} displayType={'text'} thousandSeparator={true} decimalScale={2}/>
              </p>
            </div>
          </div>

        ))}


      </div>
    )
  }
}

export default Infura;
