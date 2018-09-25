import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'


function Skills() {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

        <h2 className="mb-5">Skills</h2>
        </CSSTransitionGroup>

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
          <hr/>

          <div className="subheading mb-3">Data - Machine Learning with <i className="fab fa-python"></i></div>
            <p className='mb-3'>Anaconda - Numpy, Scipy, Pandas, Scikit-Learn, Jupyter Notebook <br/>Visualization - matplotlib, seaborn, D3 </p>
          <div className="subheading mb-3 text-justify">Workflow</div>
            <ul className="fa-ul mb-3">
            <li>
              <i className="fa-li fa fa-check"></i>
              Understand data source, how data is populated vs derived, missing values</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Mark features that will not be available during data collection to avoid leakage</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Understand categorical or numeric data. Central tendency and spread</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Observe feature correlation with plots and do feature selection and proceed to building training set pipeline</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Apply Label and One Hot encoder to categorical features</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Apply scalar if necessary for numerical features</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Use train/test split</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Use appropriate classifier or regressor model and train with training set</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Apply the model to predict with test set</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Use confusion metrics and ROC AUC metric to evaluate</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Tune the model with cross validation and grid search</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Use predict / evaluate cycles to find best fit</li>
          </ul>

          <div className="subheading mb-3 text-justify">Leadership and Management</div>
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
            <hr/>

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
            <hr/>

      </section>
      <hr className="m-0" />
    </div>
  )
}

export default Skills;
