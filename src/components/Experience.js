import React, {Component} from 'react';

function Experience() {
  return (

    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Independent, Blockchain & Data Science</h3>
            <ul>
              <li>Independent research projects to explore possibilities with Blockchain</li>
              <li>Mock projects on Data Science & Machine Learning</li>
            </ul>
            <p><a href={process.env.PUBLIC_URL + '/Portfolio'}>Portfolio of recent projects</a></p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Sep 2017 - Present</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Associate Director - Accounts</h3>
            <div className="subheading mb-3">Cognizant Technology Solutions at Wells Fargo</div>
            <ul>
              <li>Doubled account revenue over 4 years  </li>
              <li>Slashed cost to client by 10% YOY via continuous technology innovation </li>
              <li>Overall portfolio $35M+</li>
              <li>CRM: Peoplesoft and Salesforce</li>
              <li>Business Lines: Brokerage & Wealth, Wholesale And Commercial Banking</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Jan 2013 - Aug 2017</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Senior Manager - Delivery  </h3>
            <div className="subheading mb-3">Cognizant Technology Solutions at Wells Fargo</div>
            <ul>
              <li>Improved profitability of $5M+ portfolio by 5% via standardization, automation, developer friendly tooling adoption</li>
              <li>Improved Vendor Scorecard Performance</li>
              <li>Delivered multiple Financial Advisor and Customer impacting projects</li>
              <li>Tech Stack: .Net framework, Angular JS, Splunk, Peoplesoft, Actuate BI Reporting </li>
              <li>Domain: Retail Brokerage / Wealth Management</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Jan 2011 - Dec 2012</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Manager - Delivery</h3>
            <div className="subheading mb-3">Cognizant Technology Solutions at Wells Fargo</div>
            <ul>
              <li>Developed culture of customer centric continuous innovation and consulting</li>
              <li>Improved, Maintained Delivery KPIs to complete project on budget and schedule</li>
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
            <ul>
              <li>Engineering Team Lead - Accounts Management Telco billing platform</li>
              <li>Lanunched multiple Direct Dial, Bundled and VoIP products</li>
            </ul>
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

export default Experience;
