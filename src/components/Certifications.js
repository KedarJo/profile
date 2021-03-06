import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'


function Certifications() {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

          <h2 className="mb-5">Technical Certifications</h2>
        </CSSTransitionGroup>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='' target='_blank' rel="noopener noreferrer">
              BIAN Online Training
            </a> - Banking Industry Architectural Network</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='http://bcert.me/slazjqfgg' target='_blank' rel="noopener noreferrer">
              Pivotal Cloud Foundry Developer
            </a> - Pivotal Software, Inc.</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://courses.cognitiveclass.ai/certificates/a3ce2069506a4ae29f5af41ab0fe4dbe' target='_blank' rel="noopener noreferrer">
              Getting Started with Microservices with Istio and IBM Cloud Kubernetes Service
            </a> - IBM Acclaim</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://www.coursera.org/account/accomplishments/verify/LXCDRD8L748L' target='_blank' rel="noopener noreferrer">
                Microservices - Fundamentals
              </a> - IBM Acclaim</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://www.coursera.org/account/accomplishments/specialization/VA5CVBLYT9GE' target='_blank' rel="noopener noreferrer">
              Developing APIs with Apigee API Platform Specialization
              </a> - Google Cloud</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://courses.cognitiveclass.ai/certificates/32a8115c697c40c1912e81b531b2cf32' target='_blank' rel="noopener noreferrer">
              Build Your Own Chatbot
              </a> - IBM Acclaim</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://www.coursera.org/account/accomplishments/specialization/RLNPL7NKLNP7' target='_blank' rel="noopener noreferrer">
                Web Design For Everybody Specialization
              </a> - University of Michigan</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://www.coursera.org/account/accomplishments/certificate/NJ6HX78TLSJQ' target='_blank' rel="noopener noreferrer">
                Applied Machine Learning in Python
              </a> - University of Michigan</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='https://www.coursera.org/account/accomplishments/specialization/PKA6X3SMF9VE' target='_blank' rel="noopener noreferrer">
                Python for Everybody Specialization
              </a> - University of Michigan</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href='' target='_blank' rel="noopener noreferrer">
                Ethereum : Developer Program Online Bootcamp 2018
              </a> - ConsenSys Academy</li>
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
                      Certified Scrum Product Owner - CSPO
               - Scrum Alliance</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
                      Bitcoin and Cryptocurrency Technologies
                - Princeton University</li>

          </ul>
          <hr/>
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

          <h3 className="mb-4">Upcoming Certifications</h3>
          </CSSTransitionGroup>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Istio and Microservices - Beyond Basics - IBM Acclaim</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Data Engineering with Google Cloud</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Securities Industry Essential - FINRA</li>

          </ul>
        </div>

      </section>
      <hr className="m-0" />
    </div>
  )
}

export default Certifications;
