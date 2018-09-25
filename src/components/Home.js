import React, {Component} from 'react';

function Home() {
  return (
    <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div className="my-auto">
            <h1 className="mb-0">Kedar
              <span className="text-primary"> Joshi</span>
            </h1>
            <div className="subheading mb-5">Charlotte, NC · (980) 226-3028 ·
              <a href="mailto:kedarnj@gmail.com">kedarnj@gmail.com</a>
            </div>
            <div className='text-justify'>
              <p className="lead mb-4">Hello and Welcome! </p>
              <p className="lead mb-4">I am Kedar, an analyst / consultant with an eye for detail, appreciation for aesthetics and take pride and satisfaction only when the work is done to the exacting standards. </p>
              <p className="lead mb-4">I have past <a href={process.env.PUBLIC_URL + '/Experience'}>experience</a> in Retail Brokerage/Wealth Management domain. I have an overall experience of a decade and half as a developer, delivery manager and account/engagement manager. </p>
              <div className="mb-4">
                <p className="lead">With my <a href={process.env.PUBLIC_URL + '/Portfolio'}>recent work</a> and new <a href={process.env.PUBLIC_URL + '/Skills'}>skills</a> I can help you with the projects that involve:</p>
                <ul>
                  <li>Front end web development</li>
                  <li>SOA / Microservices / API (WIP Skill development: Service Mesh with Istio)</li>
                  <li>Blockchain implementation</li>
                  <li>Data collection, analysis, visualization, Machine Learning</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="lead">I can also help you with:</p>
                <ul>
                  <li>Liaising for technology teams with relationship focus</li>
                  <li>Understanding strategic business goals and needs</li>
                  <li>Developing business cases with cost-benefit analysis</li>
                  <li>KPI driven Project Management, Budgeting and Progress Tracking</li>
                  <li>Coaching / Knowledge Sharing with other team members</li>
                  <li>RFP/Vendor management</li>
                </ul>
              </div>

              <p className="lead mb-4">My professional interests include product strategy and operations, business analysis, service design, experimenting and implementing digital solutions that enhance product experience. </p>
              <p className="lead mb-4">I love learning by being hands on and help teams achieve their goals. I am a great fit for any role that sits at the intersection of business savvy and technology.</p>
              <p className="lead mb-4">Find a bit more <a href={process.env.PUBLIC_URL + '/About'}>about me</a>.</p>
              <p className="lead mb-4">Say Hello <a href="mailto:kedarnj@gmail.com">@email</a> </p>
            </div>
          </div>
        </section>

        <hr className="m-0" />
    </div>
  )
}

export default Home;
