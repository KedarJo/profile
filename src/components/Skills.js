import React, {Component} from 'react';

function Skills() {
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
                  <i className="fas fa-cube"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-atom"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-github-alt"></i>
                </li>
              </ul>

            <div className="subheading mb-3 text-justify">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Requirement Analysis / Backlog Grooming</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Wireframes / Mockups (Balsamiq)</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Develop User Stories and Epics</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Smart Contract Design and Development with Truffle</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Smart Contract Testing with Chai / Mocha in TDD</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Smart Contract Security Considerations, Static code review tools</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Smart Contract Ecosystem IPFS, UPort etc</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Cross Functional Teams</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Agile Development &amp; Scrum with Jira</li>
              </ul>

          <div className="subheading mb-3 text-justify">Management</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Developing and executing a strategic vision that enables long-term profitable growth of market share</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Design Service touchpoints understanding customer journey map</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Execution of strategic plans and implementing best-in-class processes to drive high quality deliverables while contributing to high bottom line profitability</li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Team Leadership and People Management </li>
            </ul>

            <div className="subheading mb-3">Communication Tools</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fas fa-file-word"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-file-excel"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-file-powerpoint"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fas fa-envelope"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-skype"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-slack"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-whatsapp-square"></i>
                </li>
              </ul>


      </section>
      <hr className="m-0" />
    </div>
  )
}

export default Skills;
