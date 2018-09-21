import React, {Component} from 'react';
import Web3 from 'web3'

class Infura extends Component {
  constructor(props) {
    super(props)
    this.state = {
        web3Provider: null,
        web3: null,
        blockLatest: null,
    }
  }

  componentWillMount() {
    //console.log(this.state.web3)
    if (this.state.web3 == null) {
      this.state.web3Provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/dPotOByPqLlLN3nx14Pq')
      this.state.web3 = new Web3(this.state.web3Provider)
    }
    console.log(this.state.web3)
    //console.log(this.state.web3Provider)
    this.state.web3.eth.getHashrate().then(console.log);


  }

  render() {
    return(
      <div>Latest Block on Mainnet {this.state.web3.eth.blockNumber}</div>
    )
  }
}

export default Infura;
