import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import './App.css';

const Home = () => {
  return (
    <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div className="my-auto">
            <h1 className="mb-0">Kedar
              <span className="text-primary"> Joshi</span>
            </h1>
            <div className="subheading mb-5">14213 Stewarts Bend Lane · Charlotte, NC 28277 · (980) 226-3028 ·
              <a href="mailto:kedarnj@gmail.com">kedarnj@gmail.com</a>
            </div>
            <p className="lead mb-5">I thrive on understanding how things work from the first principles. I love knowing stories behind the processes and people who made it possible. I believe in transformative power of technology as applied to the business models and help businesses accomplish results. This helps me formulate business strategy. </p>
            <p className="lead mb-5">As an accounts/engagement manager for Retail Brokerage (WFA) and Wealth Management division of Wells Fargo I helped implement 8 pronged strategy based on relationship development, research and innovation with rapid prototyping and product mindset to elevate the contractual agreement to a rich long term partnership, consistently posting double digit growth and high customer satisfaction score. </p>
            <p className="lead mb-5">As a delivery manager based out of India, I project managed and delivered multi-million dollar projects for clients with exacting delivery standards, ensuring high quality deliverables and inspiring teams with storytelling, breaking the communication barriers and making the ‘black-box’ transparent. </p>
            <p className="lead mb-5">As an engineer and tech lead, I focused on best in class solution design and collaboration with cross functional teams with a true service mindset. </p>
            <p className="lead mb-5">I have overall industry experience of 16+ years. I believe in continuous learning and currently focused on developing skill-set on blockchains and data science. </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/kedar-joshi-5648b44b/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/KedarJo" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>

            </div>
          </div>
        </section>

        <hr className="m-0" />
    </div>
  )
}



const Experience = () => {
  return (

    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Engagement Manager</h3>
            <div className="subheading mb-3">Cognizant Technology Solutions at Wells Fargo</div>
            <p>Drove double digit revenue growth in under 5 years and established high quality revenue sources with lasting relationships.</p>
            <p>Implemented 8 pronged strategy for engagement management to grow and protect market share.</p>
            <p>Consistently topped customer satisfaction scores.</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Jan 2013 - Aug 2017</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Delivery Manager</h3>
            <div className="subheading mb-3">Cognizant Technology Solutions at Wells Fargo</div>
            <p>Responsible for delivery of portfolio of projects across different enterprise application areas such as customer service, Front Office and Back Office of Retail Brokerage division.</p>
            <p>Collaborated with cross functional stakeholders such as Project Managers, Business Partners, SMEs and Tech Leads to ensure smooth execution.</p>
            <p>Consistently topped team engagement scores.</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Jan 2011 - Dec 2012</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Development Team Lead and BSA</h3>
            <div className="subheading mb-3">Cognizant Technology Solutions at Wells Fargo</div>
            <ul>
              <li>Delivered a system playbook for merger integration for client.</li>
              <li>Delivered system level business requirements and functional specifications</li>
              <li>Documented business process flows</li>
              <li>Contributed to the cutover strategy for large systems migration</li>
              <li>Contributed to the end-to-end testing strategy and test planning</li>
              <li>Designed software for automated data cutovers saving 40% migration effort</li>
              <li>Acted as project manager for parts of the overall migration effort</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Jan 2007 - Dec 2010</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Developer / Tech Lead / BSA</h3>
            <div className="subheading mb-3">Cognizant Technology Solutions at AT&T</div>
            <p>Worked on several projects as Tech Lead and BSA on a billing platform. A few examples included Introduction of VoIP based service, Introduction of bundled offers with partner firm and designing and delivering several new usage based plan offers.</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Jan 2002 - Dec 2006</span>
          </div>
        </div>

      </section>
      <hr className="m-0" />
    </div>
  )
}

const Skills = () => {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-ethereum"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bitcoin"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-github-alt"></i>
            </li>
          </ul>

        <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Requirement Analysis / Backlog Grooming</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Smart Contract Design and Development with Truffle</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Smart Contract Testing with Chai / Mocha</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Smart Contract Security Considerations</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Smart Contract Ecosystem IPFS, UPort etc</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum</li>
          </ul>

          <div className="subheading mb-3">Management</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Account Management - Relationship, Marketing, Revenue, Budgeting </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Delivery Management - P&L, Pre-Sales, Project Management </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Team Leadership and People Management </li>
            </ul>


      </section>
      <hr className="m-0" />
    </div>
  )
}

const Certifications = () => {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Technical Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://www.coursera.org/account/accomplishments/specialization/PKA6X3SMF9VE' target='_blank' rel="noopener noreferrer">
                Python for Everybody Specialization
              </a> - University of Michigan</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://www.coursera.org/account/accomplishments/verify/LXCDRD8L748L' target='_blank' rel="noopener noreferrer">
                Microservices - Fundamentals
              </a> - IBM Acclaim</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://www.coursera.org/account/accomplishments/verify/BWEEABUS7R8M' target='_blank' rel="noopener noreferrer">
                IBM Blockchain Foundation for Developers
              </a> - IBM Acclaim</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://certificates.b9lab.com/certificate.html?uuid=845e18ae-f249-4c16-a820-68a7c5d7dbc0' target='_blank' rel="noopener noreferrer">
                The Blockchain for Technical Executives and Analysts
              </a> - B9 Labs Certification</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://www.udemy.com/certificate/UC-F8VI40X2' target='_blank' rel="noopener noreferrer">
                Ethereum : Decentralized Application Design & Development
              </a> - UDemy Certification</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
                      Certified Scrum Product Owner - CSPO
               - Scrum Alliance</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
                      Bitcoin and Cryptocurrency Technologies
                - Princeton University</li>

          </ul>
        </div>

      </section>
    </div>
  )
}

const Education = () => {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Wesleyan University</h3>
              <div className="subheading mb-3">Property and Liability: An Introduction to Law and Economics</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2018 - Present</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Stanford University</h3>
              <div className="subheading mb-3">Game Theory: Advanced Applications</div>
              <div><a href='https://www.coursera.org/account/accomplishments/verify/KHU7VM8HZZ25' target='_blank' rel="noopener noreferrer">
                    Certification Course
                   </a>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Stanford University</h3>
              <div className="subheading mb-3">Cryptography</div>
              <div><a href='https://www.coursera.org/account/accomplishments/verify/SBBXLRAFCV59' target='_blank' rel="noopener noreferrer">
                    Certification Course
                   </a>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Duke University </h3>
              <div className="subheading mb-3">Behavioral Finance</div>
              <div><a href='https://www.coursera.org/account/accomplishments/verify/DJXYG3VQNLKL' target='_blank' rel="noopener noreferrer">
                    Certification Course
                   </a>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dec 2017 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">University of Virginia</h3>
              <div className="subheading mb-3">Design Thinking for Innovation</div>
              <div><a href='https://www.coursera.org/account/accomplishments/verify/TWSGZ7Q5AJAN' target='_blank' rel="noopener noreferrer">
                    Certification Course
                   </a>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2017 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">University of Pune</h3>
              <div className="subheading mb-3">Bachelor of Mechanical Engineering</div>
              <div> Specialization - Robotics </div>
              <p>Degree with Distinction</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jul 1997 - Jun 2001</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <p>New Route About</p>
    </div>
  )
}

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
        <BrowserRouter>
          <div id='page-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">

              <a className="navbar-brand" href="#page-top">
                <span className="d-block d-lg-none">Kedar Joshi</span>
                <span className="d-none d-lg-block">
                  <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="profile.jpg" alt="Kedar Profile Pic" />
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
                    <NavLink to={process.env.PUBLIC_URL + '/About'} className='nav-link' onClick = {() => {document.getElementByClassName('navbar-collapse').collapse('hide')}}>About</NavLink>
                  </li>

                </ul>
              </div>
            </nav>
            <Switch>
              <Route path={process.env.PUBLIC_URL + '/'} component={ Home } exact />
              <Route path={process.env.PUBLIC_URL + '/Experience'} component={ Experience } />
              <Route path={process.env.PUBLIC_URL + '/Skills'} component={ Skills } />
              <Route path={process.env.PUBLIC_URL + '/Certifications'} component={ Certifications } />
              <Route path={process.env.PUBLIC_URL + '/Education'} component={ Education } />
              <Route path={process.env.PUBLIC_URL + '/About'} component={ About } />
              <Route component={ ErrorPath } />
            </Switch>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

/*

*/

export default App;
