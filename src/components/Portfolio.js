import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import Graph from './Graph'
import Infura from './Infura'

function Portfolio () {
  return(
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio">
        <div className="my-auto">
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
          <h2 className="mb-0">Recent Work</h2>
          </CSSTransitionGroup>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto text-justify">

              <div className="subheading mb-0">This Portfolio Website
                <a href="https://github.com/KedarJo/profile" target="_blank" rel="noopener noreferrer">
                  <span>  <i className="fab fa-github-alt"></i></span>
                </a>
              </div>
              <p><strong>Objective:</strong> Build personal brand. Demonstrate new skillset by hands-on concept to delivery.</p>
              <p className='mb-5'><strong>Tech Stack: </strong>ReactJS, React Router, Functional and Class components, JSX, Bootstrap 4, D3JS</p>
              <hr />
              <div className="subheading mb-0">Emerging Tech: eCommerce on Blockchain
                <a href="https://github.com/KedarJo/marketplace" target="_blank" rel="noopener noreferrer">
                  <span>  <i className="fab fa-github-alt"></i></span>
                </a>
              </div>
              <p><strong>Objective:</strong> Explore application of dis-intermediation via hands-on smart contract dApp development for a simple use case.</p>
              <p><strong>Tech Stack: </strong>(Ganache-CLI dev sandbox) ReactJS, ES6, Web3JS and Bootstrap 4, Solidity Smart Contracts, IPFS, MetaMask</p>
              <div id="carouselETHMarketplace" className="carousel slide mb-3" data-ride="carousel">
                <ol className="carousel-indicators carousel-indicators--round">
                  <li data-target="#carouselETHMarketplace" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselETHMarketplace" data-slide-to="1"></li>
                  <li data-target="#carouselETHMarketplace" data-slide-to="2"></li>
                  <li data-target="#carouselETHMarketplace" data-slide-to="3"></li>
                  <li data-target="#carouselETHMarketplace" data-slide-to="4"></li>
                  <li data-target="#carouselETHMarketplace" data-slide-to="5"></li>
                  <li data-target="#carouselETHMarketplace" data-slide-to="6"></li>
                  <li data-target="#carouselETHMarketplace" data-slide-to="7"></li>
                  <li data-target="#carouselETHMarketplace" data-slide-to="8"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="jumbotron">
                      <h3 className="display-4">eCommerce Marketplace dApp</h3>
                      <p className='text-justify lead'>Very simple implementation to explore dApp <br/>Disclaimer: UX can be significantly enhanced.<br/><br/>The focus of building dApp is as follows:</p>

                      <ul className='lead'>
                        <li>Build core logic in Marketplace contract</li>
                        <li>Role based access control</li>
                        <li>Contract safety features</li>
                      </ul>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <img className="img-fluid img-responsive mx-auto d-block " src="./img/StoreOwnerRegistration.png" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid img-responsive mx-auto d-block " src="./img/register.png" alt="Second slide" />
                    <div className="carousel-caption">
                      <h5>Customer can register as Store Owner</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid img-responsive mx-auto d-block " src="./img/adminApprove.png" alt="Third slide" />
                    <div className="carousel-caption">
                      <h5>Admin to Review & Approve</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid img-responsive mx-auto d-block " src="./img/storesCreated.png" alt="Fourth slide" />
                    <div className="carousel-caption">
                      <h5>Approved Store Owners Create Stores & List Items</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid img-responsive mx-auto d-block " src="./img/Shop_Replenish.png" alt="Fifth slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid img-responsive mx-auto d-block " src="./img/customersShop.png" alt="Sixth slide" />
                    <div className="carousel-caption">
                      <h5>Customers Browse and Shop | Pay to Smart Contract</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid img-responsive mx-auto d-block " src="./img/adminPayApprove.png" alt="Seventh slide" />
                    <div className="carousel-caption">
                      <h5>Admin to review and approve payment to stores</h5>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="jumbotron">
                      <h4 className="display-4">Benefits</h4>
                      <ul className='lead'>
                        <li>Decentralized P2P value exchange</li>
                        <li>Off chain decentralization via IPFS</li>
                        <li>Permanent audit trail of transactions</li>
                        <li>Attributable due to PK Crypto</li>
                        <li>Basis for P2P asset exchanges</li>
                      </ul>
                      <hr/>
                      <h4 className="display-4">Limitations</h4>
                      <ul className='lead'>
                        <li>Design of Governance and Fiduciary </li>
                        <li>Can become Honey Pot for hackers</li>
                        <li>Design for longer confirmation times</li>
                        <li>Physical asset fulfillment solutions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselETHMarketplace"  data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselETHMarketplace" role="button"  data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <hr />

              <div className="subheading mb-0">Emerging Tech: ETH Node Graph Analysis
                <a href="https://github.com/KedarJo/ethScan" target="_blank" rel="noopener noreferrer">
                  <span>  <i className="fab fa-github-alt"></i></span>
                </a>
              </div>
              <p><strong>Objective:</strong> Explore inter-account interactions and value exchanges on Ethereum mainnet</p>
              <p><strong>Tech Stack: </strong>Python3, Web3.py, Sqlite, D3-force. <br/> With sample data downloaded from ETH mainnnet with Web3 API we can observe P2P transaction clusters of exchange contracts</p>
              <Graph />
              <p className='mb-5'></p>
              <hr />
              <div className="subheading mb-0">CFPB complaints as feature to predict stock price
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span>  <i className="fab fa-github-alt"></i></span>
                </a>
              </div>
              <p><strong>Tech Stack: </strong>Python3 for Data Science - numpy, scipy, pandas, matplotlib, D3</p>
              <p>D3 visulization Coming soon...</p>
              <p>A very weak negative correlation is observed. This can certainly be a feature to consider for Supervised Learning, however other features with stronger correlation must be discovered</p>
              <img className="img-fluid img-responsive mx-auto d-block " src="./img/Complaints.png" alt="matplotlib visual" />
              <p className='mb-5'></p>
              <hr />
              <div className="subheading mb-0">Independent Research: Case for Rethinking Tech Services
                <a href="https://medium.com/@kedarnj/case-for-rethinking-tech-services-fd65ec81ca68" target="_blank" rel="noopener noreferrer">
                  <span>  <i className="fab fa-medium"></i></span>
                </a>
              </div>
              <p className="mb-3">TL;DR The firms exist to control the factors of production and efficiently produce good and services. Intermediation is valuable as it brings efficiencies to the markets. Technology has been a great force behind disintermediation by changing the ways in which means of value creation can be re-intermediated. The rise of internet threw open a lot more possibilities of conducting business.</p>
              <p className='mb-5'>As Digital Technologies take center stage, need for specialized technology services is greater than ever. Platform model and blockchain based technologies hold great promise in providing alternative to enable peer to peer transactions of highly specialized services possible with leaner and more customer centric manner. The article discusses possibilities the future holds.</p>
              <hr />

              <div className="subheading mb-0">Earnings Report Dashboard
                <a href="#">
                  <span>  <i className="fab fa-github-alt"></i></span>
                </a>
              </div>
              <p><strong>Tech Stack: </strong>Python3 for accounting - Edgar XBRL paring with Python BeautifulSoup, Visualization with D3</p>
              <p className='mb-5'>Coming soon...</p>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}

/*
<div className="subheading mb-0">Emerging Tech: Simple Web3 API </div>
<ul className="list-inline dev-icons">
  <li className="list-inline-item">  <i className="fab fa-ethereum"></i></li>
</ul>
<div className='mb-5'> <Infura /></div>

*/

export default Portfolio;
