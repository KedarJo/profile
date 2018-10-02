import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { RadialChart, DiscreteColorLegend } from 'react-vis';


function Home() {
  return (
    <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div className="my-auto">
          <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

            <h1 className="mb-0">Kedar
              <span className="text-primary"> Joshi</span>
            </h1>

            <div className="subheading mb-5">Charlotte, NC · (980) 226-3028 ·
              <a href="mailto:kedarnj@gmail.com">kedarnj@gmail.com</a>
            </div>
            </CSSTransitionGroup>

              <h4 className="mb-4">Business Technology Consultant</h4>
              <div className="mb-4">

                <div className="card col-sm-4">
                  <div className="card-body">
                    <h5 className='card-title'>Experience Summary (15+ Yrs): Role</h5>
                    <strong>
                    <RadialChart
                      className={'donut-chart-example'}
                      data={[
                        {angle: 4, label: '1'},
                        {angle: 3, label: '2'},
                        {angle: 5, label: '3'},
                        {angle: 4, label: '4'},
                        {angle: 1, label: '5'}
                      ]}
                      showLabels={true}
                      innerRadius={40}
                      radius={100}
                      width={250}
                      height={250}
                      padAngle={0.04}
                    >
                    </RadialChart>
                    </strong>
                    <DiscreteColorLegend
                      showLabels={true}
                      items={['1 Software Engineering', '2 Business Systems Analysis', '3 Program Management','4 Account Strategy and Sales','5 Independent Projects']}
                      width={250}
                      height={150}
                    />

                  </div>
                </div>
                <div className="card col-sm-4">
                  <div className="card-body">
                    <h5 className='card-title'>Experience Summary (15+ Yrs): Domain</h5>
                    <strong>
                    <RadialChart
                      className={'donut-chart-example'}
                      data={[
                        {angle: 5, label: '1'},
                        {angle: 7, label: '2'},
                        {angle: 2, label: '3'},
                        {angle: 2, label: '4'},
                        {angle: 1, label: '5'},
                      ]}
                      showLabels={true}
                      innerRadius={40}
                      radius={100}
                      width={250}
                      height={250}
                      padAngle={0.04}
                    >
                    </RadialChart>
                    </strong>
                    <DiscreteColorLegend
                      showLabels={true}
                      items={['1 Telco Billing', '2 Retail Brokerage', '3 Weath Management', '4 Commercial Banking','5 Platform Technology Research']}
                      width={250}
                      height={150}
                    />
                    </div>
                  </div>


                  <div className="card col-sm-8">
                    <div className="card-body">
                      <h5 className='card-title'>Clients Helped</h5>
                      <img src={process.env.PUBLIC_URL + '/img/WellsFargo.png'} alt="WellsFargo Client Logo" className="img-fluid rounded-top logo-image" />
                      <img src={process.env.PUBLIC_URL + '/img/ATT.png'} alt="ATT Client Logo" className="img-fluid rounded-top float-left logo-image" />
                    </div>
                  </div>


                <p><strong><a href={process.env.PUBLIC_URL + '/Experience'}>Experience Details</a></strong></p>
              </div>
              <div className="card col-sm-8">
                <div className="card-body">
                  <h5 className='card-title'>Skill Summary</h5>
                  <span className="mb-3"><strong>Top Skills</strong>
                  <ul className="list-group mb-3">
                    <li className="list-group-item">Business Analysis</li>
                    <li className="list-group-item">Business Strategy and Sales</li>
                    <li className="list-group-item">Project Management</li>
                    <li className="list-group-item">Solution Architecture</li>
                  </ul>
                  </span>
                  <span><strong>Featured Skills</strong>
                  <ul className="list-group">
                    <li className="list-group-item">Blockchain</li>
                    <li className="list-group-item">SOA and Microservices</li>
                    <li className="list-group-item">Machine Learning</li>
                    <li className="list-group-item">Web Design and Development</li>
                    <li className="list-group-item">Agile</li>
                  </ul>
                  </span>
                </div>
              </div>

              <p>
                <strong><a href={process.env.PUBLIC_URL + '/Skills'}>Skill Details</a></strong>&nbsp;&nbsp;&nbsp;&nbsp;
                <strong><a href={process.env.PUBLIC_URL + '/Certifications'}>Certifications</a></strong>
              </p>
              <p className="mb-4"><strong><a href={process.env.PUBLIC_URL + '/Portfolio'}>Portfolio of Recent Work</a></strong></p>

              <div className="card col-sm-8">
                <div className="card-body">
                  <h5 className='card-title'>Professional Interests</h5>
                  <p>Product Strategy and Operations, Business Analysis, Service Design, Experimenting and Implementing Digital Solutions that enhance product experience</p>
                </div>
              </div>
              <p className="mb-4"><strong><a href={process.env.PUBLIC_URL + '/About'}>About me</a></strong></p>
              <p className="mb-4">Say Hello <a href="mailto:kedarnj@gmail.com">@email</a> </p>
            </div>

        </section>

        <hr className="m-0" />
    </div>
  )
}

/*


*/

export default Home;
