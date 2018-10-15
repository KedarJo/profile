import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Education from './components/Education'
import About from './components/About'
import ChatBot from './components/ChatBot';


import './App.css';


const ErrorPath = () => {
  return (
    <div>
      <p>Error: Path does not exit</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <BrowserRouter>
          <div id='page-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">

              <a className="navbar-brand" href="#page-top">
                <span className="d-block d-lg-none">Kedar Joshi</span>
                <span className="d-none d-lg-block">
                  <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="./img/profile_alt.png" alt="Kedar's Profile" />
                </span>
              </a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                  <li className="nav-item">
                    <NavLink to={process.env.PUBLIC_URL + '/'} className='nav-link' onClick = {() => {document.getElementByClassName('navbar-collapse').collapse('hide')}}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={process.env.PUBLIC_URL + '/Portfolio'} className='nav-link' onClick = {() => {document.getElementByClassName('navbar-collapse').collapse('hide')}}>Portfolio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={process.env.PUBLIC_URL + '/Experience'} className='nav-link' onClick = {() => {document.getElementByClassName('navbar-collapse').collapse('hide')}}>Experience</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={process.env.PUBLIC_URL + '/Skills'} className='nav-link' onClick = {() => {document.getElementByClassName('navbar-collapse').collapse('hide')}}>Skills</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={process.env.PUBLIC_URL + '/Certifications'} className='nav-link' onClick = {() => {document.getElementByClassName('navbar-collapse').collapse('hide')}}>Certifications</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={process.env.PUBLIC_URL + '/Education'} className='nav-link' onClick = {() => {document.getElementByClassName('navbar-collapse').collapse('hide')}}>Education</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={process.env.PUBLIC_URL + '/About'} className='nav-link' onClick = {() => {document.getElementByClassName('navbar-collapse').collapse('hide')}}>About Me</NavLink>
                  </li>

                </ul>
              </div>
            </nav>

            <main>
              <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} component={ Home } exact />
                <Route path={process.env.PUBLIC_URL + '/Portfolio'} component={ Portfolio } exact />
                <Route path={process.env.PUBLIC_URL + '/Experience'} component={ Experience } />
                <Route path={process.env.PUBLIC_URL + '/Skills'} component={ Skills } />
                <Route path={process.env.PUBLIC_URL + '/Certifications'} component={ Certifications } />
                <Route path={process.env.PUBLIC_URL + '/Education'} component={ Education } />
                <Route path={process.env.PUBLIC_URL + '/About'} component={ About } />
                <Route component={ ErrorPath } />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
        </header>

        <div className="fixed-bottom d-flex flex-row-reverse mr-4 mb-5">
          <button type="button" className="btn btn-dark rounded-circle btn-lg" data-toggle="modal" data-target="#chatbotModal">
            <i className="fas fa-question"></i>
          </button>
        </div>

        <div className="modal fade" id="chatbotModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ask Lara</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ChatBot />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <footer>
            <div className="social-icons p-2 d-flex d-column justify-content-center">
              <a href={ process.env.PUBLIC_URL + '/' }>
                <i className="fas fa-home"></i>
              </a>
              <a href="https://www.linkedin.com/in/kedar-joshi-5648b44b/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/KedarJo" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:kedarnj@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <hr className="m-0" />
        </footer>
      </div>
    );
  }
}

/*
<ChatBot />
<i className="fas fa-headset"></i>
<i className="far fa-comments"></i>
<section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
</section>
<p className="lead mb-5">As an accounts/engagement manager for Retail Brokerage (WFA) and Wealth Management division of Wells Fargo I was responsible for building and implementing strategic vision based on relationship development, research and innovation with rapid prototyping and product mindset to elevate the contractual agreement to a rich long term partnership, consistently posting double digit growth and high customer satisfaction score. </p>
<p className="lead mb-5">As a delivery manager based out of India, I project managed and delivered multi-million dollar projects for clients with exacting delivery standards, ensuring high quality deliverables and inspiring teams with storytelling, breaking the communication barriers and making the ‘black-box’ transparent. </p>
<p className="lead mb-5">As an engineer and tech lead, I focused on best in class solution design and collaboration with cross functional teams with a true service mindset. </p>
<img className="img-fluid img-responsive mx-auto mb-2" src='BehaviouralBiasBrain.jpg' alt='BehaviouralBiasBrain' />
<img className="img-fluid img-responsive mx-auto mb-2" src='storytelling.jpg' alt='storytelling' />
<img className="img-fluid img-responsive mx-auto mb-5" src='ethGraph.png' alt='eth Node Graph' />

*/

export default App;
