import React, {Component} from 'react';

function Certifications() {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Technical Certifications</h2>
          <ul className="fa-ul mb-0">
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
          <hr/>
          <h2 className="mb-5">Upcoming Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              R3 Corda Certified Developer - IBM Acclaim</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Platform Strategy for Business - University of Boston, Questrom School of Business</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Microservices with Istio and IBM Cloud Kubernetes Service - IBM Acclaim</li>

          </ul>
        </div>

      </section>
      <hr className="m-0" />
    </div>
  )
}

export default Certifications;
